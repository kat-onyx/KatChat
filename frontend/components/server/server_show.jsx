import React from 'react';

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
        return {
            // channelIndex?
        }
    }
}

export default ServerShow;