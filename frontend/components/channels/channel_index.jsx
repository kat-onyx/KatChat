import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { create } from 'domain';

class ChannelIndex extends React.Component {
   
    componentDidMount() {
        
        this.props.fetchChannels(this.props.currentServerId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentServerId !== prevProps.currentServerId) {
            this.props.fetchChannels(this.props.currentServerId);
        }
    }

    render () {
        
        const channels = this.props.channels.map((channel) => {
            return (<ChannelIndexItem key={channel.id} channel={channel}/>)
        })

        let createButton = null;

        if (this.props.currentServerId !== undefined) {
            createButton = <button onClick={() => this.props.openModal('createChannel')} className="channel-button">+</button>
        }
        return (
            <div className="channel-index-container">
                <div>Server Name Here</div>
                <div className="channel-list">
                    <div className="channel-list-title">Text Channels</div>
                    <div classname="channel-list-add">{createButton}</div>
                </div>
                <div className="channel-list-item">{ channels }</div>
            </div>
        )
    }
}

export default ChannelIndex;