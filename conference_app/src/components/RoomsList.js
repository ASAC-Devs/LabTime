import UserVideoComponent from "./UserVideoComponent";
import UserScreenComponent from "./UserScreenComponent";
import { getToken } from "../api/roomsManager";
import { OpenVidu } from "openvidu-browser";
import React, { Component } from 'react';


class RoomsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mySessionId: 'SessionA',
            myUserName: 'Participant' + Math.floor(Math.random() * 100),
            session: undefined,
            mainStreamManager: undefined,
            publisher: undefined,
            subscribers: [],
            mic: true,
            camera: true,
            myScreenShare: undefined
        };

        this.joinSession = this.joinSession.bind(this);
        this.leaveSession = this.leaveSession.bind(this);
        this.handleChangeSessionId = this.handleChangeSessionId.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleMainVideoStream = this.handleMainVideoStream.bind(this);
        this.onbeforeunload = this.onbeforeunload.bind(this);
        this.handleToggleAudio = this.handleToggleAudio.bind(this);
        this.handleToggleVideo = this.handleToggleVideo.bind(this);
        this.shareScreen = this.shareScreen.bind(this);
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.onbeforeunload);
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.onbeforeunload);
    }

    onbeforeunload(event) {
        this.leaveSession();
    }

    handleChangeSessionId(e) {
        this.setState({
            mySessionId: e.target.value,
        });
    }

    handleChangeUserName(e) {
        this.setState({
            myUserName: e.target.value,
        });
    }

    handleMainVideoStream(stream) {
        if (this.state.mainStreamManager !== stream) {
            this.setState({
                mainStreamManager: stream
            });
        }
    }
    handleToggleAudio() {
        console.log('Trigrered Audio');
        this.setState({ mic: !this.state.mic },
            () => this.state.publisher.publishAudio(this.state.mic)
        );
    }
    handleToggleVideo() {
        console.log('Trigrered Video');
        this.setState({ camera: !this.state.camera },
            () => this.state.publisher.publishVideo(this.state.camera)
        );
    }

    deleteSubscriber(streamManager) {
        let subscribers = this.state.subscribers;
        let index = subscribers.indexOf(streamManager, 0);
        if (index > -1) {
            subscribers.splice(index, 1);
            this.setState({
                subscribers: subscribers,
            });
        }
    }

    joinSession(e) {
        e.preventDefault()
        this.OV = new OpenVidu();
        this.setState(
            {
                session: this.OV.initSession(),
            },
            () => {
                let mySession = this.state.session;
                mySession.on('streamCreated', (event) => {
                    console.log('streamCreated');
                    let subscriber = mySession.subscribe(event.stream, undefined);
                    let subscribers = this.state.subscribers;
                    subscribers.push(subscriber);
                    this.setState({
                        subscribers: subscribers,
                    });
                });

                mySession.on('streamDestroyed', (event) => {
                    this.deleteSubscriber(event.stream.streamManager);
                });

                mySession.on('exception', (exception) => {
                    console.warn(exception);
                });

                getToken(this.state.mySessionId).then((token) => {
                    mySession.connect(token, { clientData: this.state.myUserName },
                    ).then(() => {
                        let publisher = this.OV.initPublisher(undefined, {
                            audioSource: undefined,
                            videoSource: undefined,
                            publishAudio: true,
                            publishVideo: true,
                            resolution: '640x480',
                            frameRate: 30,
                            insertMode: 'APPEND',
                            mirror: false,
                        });
                        //-------------
                        mySession.publish(publisher);

                        this.setState({
                            mainStreamManager: publisher,
                            publisher: publisher,
                        });
                    })
                        .catch((error) => {
                            console.log('There was an error connecting to the session:', error.code, error.message);
                        });
                });
            },
        );
    }
    shareScreen() {
        // if i am not already sharing my screen
        if (this.state.myScreenShare === undefined) {

            let mySession = this.state.session;

            let myScreenSharePublisher = this.OV.initPublisher(undefined, { videoSource: "screen" });

            myScreenSharePublisher.once('accessAllowed', (event) => {
                this.setState({
                    publisher: myScreenSharePublisher,
                    myScreenShare: myScreenSharePublisher
                });

                myScreenSharePublisher.stream.getMediaStream().getVideoTracks()[0].addEventListener('ended', () => {
                    console.log('User pressed the "Stop sharing" button');
                });
                // mySession.publish(myScreenSharePublisher);
            });

            myScreenSharePublisher.once('accessDenied', (event) => {
                console.warn('ScreenShare: Access Denied');
            });

        }
    }

    leaveSession() {

        const mySession = this.state.session;

        if (mySession) {
            mySession.disconnect();
        }

        this.OV = null;
        this.setState({
            session: undefined,
            subscribers: [],
            mySessionId: 'SessionA',
            myUserName: 'Participant' + Math.floor(Math.random() * 100),
            mainStreamManager: undefined,
            publisher: undefined,
            mic: true,
            camera: true
        });
    }


    /*----------------------------------------------------*/

    render() {
        const mySessionId = this.state.mySessionId;
        const myUserName = this.state.myUserName;

        return (<>
            <div className="grid grid-cols-5 col-span-5 col-start-1 row-span-5 row-start-1 ml-2 auto-rows-auto">

                {this.state.session ? (
                    <div className="col-span-4 col-start-2 row-span-4 row-start-1 ml-4 border-8">

                        <div>
                            <h1>{mySessionId}</h1>
                            <button onClick={this.leaveSession}>Leave room</button>
                            <button onClick={this.shareScreen}>Share Screen</button>
                            <h1>Participants: {this.state.subscribers.length + 1}</h1>

                            <section id="sharedScreenContainer">
                                {this.state.publisher === this.state.myScreenShare ? (
                                    <UserScreenComponent
                                        streamManager={this.state.myScreenShare} />
                                ) : null}
                            </section>
                        </div>

                        <button onClick={this.handleToggleAudio}>audio</button>
                        <button onClick={this.handleToggleVideo}>video</button>
                        <div id="publisherContainer" className="w-48 h-48">

                            {this.state.publisher !== this.state.myScreenShare ? (
                                <UserVideoComponent
                                    streamManager={this.state.publisher} />
                            ) : null}
                        </div>

                        {this.state.subscribers.map((sub, i) => (
                            <UserVideoComponent streamManager={sub} />
                        ))}

                    </div>
                ) : null}


                <form onSubmit={this.joinSession} className="p-2 overflow-y-scroll rounded-lg shadow-inner h-my w-52 bg-gradient-to-b from-green-light/70 to-blue-dark/70">
                    <div className="flex flex-row justify-between h-8 pl-2 pr-2 border rounded-lg shadow-md border-green-light hover:bg-blue-dark ">
                        <label className="mt-0.5 text-base antialiased font-normal text-white ">Room1</label>
                        <button onClick={this.handleChangeSessionId} value="room1" type="submit" className="mt-0.5 block w-6 h-6 text-lg font-semibold leading-6 text-center text-white rounded-xl ntialiased hover:bg-blue-light">+</button>
                    </div>

                    <div className="flex flex-row justify-between h-8 pl-2 pr-2 border rounded-lg shadow-md border-green-light hover:bg-blue-dark ">
                        <label className="mt-0.5 text-base antialiased font-normal text-white ">Room2</label>
                        <button onClick={this.handleChangeSessionId} value="room2" type="submit" className="mt-0.5 block w-6 h-6 text-lg font-semibold leading-6 text-center text-white rounded-xl ntialiased hover:bg-blue-light">+</button>
                    </div>

                    <div className="flex flex-row justify-between h-8 pl-2 pr-2 border rounded-lg shadow-md border-green-light hover:bg-blue-dark ">
                        <label className="mt-0.5 text-base antialiased font-normal text-white ">Room3</label>
                        <button onClick={this.handleChangeSessionId} value="room3" type="submit" className="mt-0.5 block w-6 h-6 text-lg font-semibold leading-6 text-center text-white rounded-xl ntialiased hover:bg-blue-light">+</button>
                    </div>

                </form>
            </div>
        </>)
    }
}
export default RoomsList;