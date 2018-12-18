import React from 'react';
import ChannelIndexItem from './channel_index_item';

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
        return (
            <div>
                <div>{ channels }</div>
                <button onClick={() => this.props.openModal('createChannel')}>Create Channel</button>
            </div>
        )
    }
}

export default ChannelIndex;