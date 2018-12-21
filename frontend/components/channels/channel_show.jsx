import React from 'react';

class ChannelShow extends React.Component {
    
    render () {
        // debugger;
        
     
        return (
            <div className="channel-name-box">
                <div className="channel-name"><span>#</span>{this.props.channelName.channel_name}</div>
            </div>
        )
    }
}

export default ChannelShow;