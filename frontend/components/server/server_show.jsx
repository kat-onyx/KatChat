import React from 'react';
import ChannelIndexContainer from '../channels/channel_index_container'

class ServerShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentServer: this.props.currentServer
        }
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps) {
        // debugger
        let serverList = Object.keys(this.props.servers);
        let firstServer = this.props.servers[serverList[0]];
        let currentServer = this.props.currentServer;
        let channelList = Object.keys(this.props.ownedChannels);
        let firstChannel = this.props.ownedChannels[channelList[0]];
        let currentChannelId = this.props.match.params.channelId;

        if (this.props.currentServer !== prevProps.currentServer) {
            this.setState({ currentServer: currentServer });
        }
        if (this.props.match.path === "/" && serverList.length != 0) {
            this.props.history.push(`/servers/${firstServer.id}`)
        } else if (currentChannelId === undefined && channelList.length != 0) {
            this.props.history.push(`/servers/${currentServer.id}/channels/${firstChannel.id}`)
        } else if (this.props.channels != prevProps.channels) {
            if (Object.keys(this.props.channels).length > 0) {
                this.props.history.push(`/servers/${currentServer.id}/channels/${firstChannel.id}`)
            } else {
                this.props.history.push(`/servers/${currentServer.id}`)
            }
        }
    }
    
    render() {
        // debugger

        return (
            <div className="server-name-box">
                <div className="server-name">{this.state.currentServer.name}</div>
            </div>
        )
    }
}

export default ServerShow;