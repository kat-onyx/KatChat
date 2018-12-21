import React from 'react';
import UserShowContainer from '../user/user_show_container';

class ChannelShow extends React.Component {
    
    render () {
     
        return (
            <div className="channel-name-box">
                <div className="channel-name"><span>#</span>{this.props.channelName.channel_name}</div>
            </div>
        )
    }
}

export default ChannelShow;