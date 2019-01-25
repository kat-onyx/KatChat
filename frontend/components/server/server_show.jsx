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
        // debugger
        let serverList = Object.keys(this.props.servers);
        let firstServer = this.props.servers[serverList[0]];
        let currentServer = this.props.currentServer.name;
        if (this.props.match.path === "/" && serverList.length != 0) {
            currentServer = firstServer.name
            this.props.history.push(`/servers/${firstServer.id}`);
        }
        return (
            <div className="server-name-box">
                <div className="server-name">{currentServer}</div>
            </div>
        )
    }
}

export default ServerShow;