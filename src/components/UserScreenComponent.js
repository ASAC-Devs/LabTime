import React, { Component } from 'react';
import OpenViduVideoComponent from './OvVideo';

export default class UserScreenComponent extends Component {

    // getNicknameTag() {
    //     // Gets the nickName of the user
    //     return JSON.parse(this.props.streamManager.stream.connection.data).clientData;
    // }

    render() {
        return (
            <div>
                {this.props.streamManager !== undefined ? (
                    <div className="streamcomponent">
                        <OpenViduVideoComponent streamManager={this.props.streamManager} />
                        <div><p>SharedScreen</p></div>
                    </div>
                ) : null}
            </div>
        );
    }
}
