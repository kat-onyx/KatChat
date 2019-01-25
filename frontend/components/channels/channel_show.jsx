import React from 'react';
import UserShowContainer from '../user/user_show_container';

class ChannelShow extends React.Component {
    
    render () {
        // debugger;
        let currentChannel = this.props.channelName.channel_name;
        let channelList = Object.keys(this.props.channels);
        let firstChannel = this.props.channels[channelList[0]];
        let currentServerId = this.props.match.params.serverId;

        // if (this.props.match.params.channelId === undefined && channelList.length != 0) {
        //     currentChannel = firstChannel.channel_name;
        //     this.props.history.push(`/servers/${currentServerId}/channels/${firstChannel.id}`);
        // }
        return (
            <div className="channel-name-box">
                <div className="channel-name"><span>#</span>{currentChannel}</div>
            </div>
        )
    }
}

export default ChannelShow;