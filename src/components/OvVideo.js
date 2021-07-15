import React, { Component } from 'react';

export default class OpenViduVideoComponent extends Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidUpdate(props) {
        if (props && !!this.videoRef) {
            this.props.streamManager.addVideoElement(this.videoRef.current);
        }
    }

    componentDidMount() {
        if (this.props && !!this.videoRef) {
            this.props.streamManager.addVideoElement(this.videoRef.current);
        }
    }

    render() {
        return (
            <>
                <button onClick={()=>{
                    document.querySelectorAll("#videoElement")[1].requestFullscreen();
                }}>
                    <video id="videoElement" autoPlay={true} ref={this.videoRef} />
                </button>
            </>
        );
    }

}
