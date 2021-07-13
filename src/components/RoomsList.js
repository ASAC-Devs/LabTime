import { useState, useEffect, useRef } from "react";
import Room from './Room'
import { getToken } from "../api/roomsManager";
import { OpenVidu } from "openvidu-browser";

export default function RoomsList() {

    // init States
    const [mySessionId, setMySessionId] = useState('MainSession');
    const [myUserName, setMyUserName] = useState('User' + Math.floor(Math.random() * 100));
    const [session, setSession] = useState(undefined);
    const [mainStreamManager, setMainStreamManager] = useState(undefined); // Main video of the page, will be 'publisher' or one of the 'subscribers',
    const [publisher, setPublisher] = useState(undefined);
    const [subscribers, setSubscribers] = useState([]);
    const OV = useRef();
    const isInitialMount = useRef(true);
    /*----------------------------------------------------*/
    function selectThisRoom(e) {
        e.preventDefault();
        setMySessionId(e.target.room.value);
        joinSession();
    }
    // whenever the sessionId changes (when choosing a room) then call the joinSession func.
    /*----------------------------------------------------*/
    function joinSession() {
        // create session
        OV.current = new OpenVidu()
        setSession(OV.current.initSession());
        // after the session is created, do..
    }
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else if (session) {
            const currentSession = session;

            currentSession.on('streamCreated', (event) => {
                debugger;
                console.log('streamCreated');
                const newSubscriber = currentSession.subscribe(event.stream, undefined);
                console.log('before push',subscribers);
                const theSubscribers = subscribers;
                theSubscribers.push(newSubscriber);
                setSubscribers(theSubscribers);
            });

            console.log('After push',subscribers);

            currentSession.on('streamDestroyed', (event) => {
                console.warn('streamDestroyed')
                deleteSubscriber(event.stream.streamManager);
            });
            currentSession.on('exception', (exception) => {
                console.warn(exception);
            });

            getToken().then(token => {
                currentSession.connect(token, { clientData: myUserName })
                    .then(() => {
                        let publisher = OV.current.initPublisher(undefined, {
                            audioSource: undefined,
                            videoSource: undefined,
                            publishAudio: false,
                            publishVideo: true,
                            resolution: '640x480',
                            frameRate: 30,
                            insertMode: 'APPEND',
                            mirror: false
                        });
                        currentSession.publish(publisher);
                        setMainStreamManager(publisher);
                        setPublisher(publisher);
                    })
                    .catch(error => {
                        console.log('There was an error connecting to the session:', error.code, error.message);
                    });

            });
        }
    }, [session]);

    /*----------------------------------------------------*/
    function leaveSession() {
        const currentSession = session;
        if (currentSession){
            currentSession.disconnect();
        }
        OV.current = null;
        setPublisher(undefined);
        setSession(undefined);
        setSubscribers([]);
        setMainStreamManager(undefined);
        setMySessionId('MainSession');
        setMyUserName('undefined');
    }
    /*----------------------------------------------------*/
    function deleteSubscriber(streamManager) {
        let theSubscribers = subscribers;
        let index = theSubscribers.indexOf(streamManager, 0);
        if (index > -1) {
            theSubscribers.splice(index, 1);
            setSubscribers(theSubscribers)
        }
    }
    /*----------------------------------------------------*/
    if (session) {
        const aSessionId = mySessionId;
        const aUserName = myUserName;
        return (
            <>
                <Room
                    roomName={aSessionId}
                    userName={aUserName}
                    publisher={publisher}
                    subscribers={subscribers} 
                    leaveSession={leaveSession}/>
            </>
        )

    } else {
        return (
            <>
                <form onSubmit={selectThisRoom}>
                    <label>room1</label>
                    <input type="radio" value="room1" name="room" /> <br />
                    <label>room2</label>
                    <input type="radio" value="room2" name="room" /> <br />
                    <button type="submit">confirm</button>
                </form>

                <h1>choose a room to join</h1>

            </>
        )
    }
}
