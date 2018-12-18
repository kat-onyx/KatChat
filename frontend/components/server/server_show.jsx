import React from 'react';
import ChannelIndexContainer from '../channels/channel_index_container'

class ServerShow extends React.Component {

    componentDidMount() {
        this.props.fetchServer(this.props.currentServerId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentServerId != prevProps.match.params.serverId) {
            fetchServer(this.props.currentServerId)
        }
    }

    render() {
        return (
            <hi></hi>
        )
    }
}

export default ServerShow;