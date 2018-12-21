import React from 'react';
import ChannelIndexContainer from '../channels/channel_index_container'

class ServerShow extends React.Component {

    // componentDidMount() {
    //     this.props.fetchServer(this.props.currentServerId)
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.currentServerId != prevProps.props.match.params.serverId) {
    //         fetchServer(this.props.currentServerId)
    //     }
    // }
    
    render() {
    
        return (
            <div className="server-name-box">
                <div className="server-name">{this.props.currentServer.name}</div>
            </div>
        )
    }
}

export default ServerShow;