import React from 'react';
import UserShowContainer from '../user/user_show_container';

class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChannel: this.props.currentChannel,
        }
    }
    componentDidMount() {
        // debugger
        // if (this.props.channelName.server_id) {
        //     this.props.history.push(`/servers/${this.props.channelName.server_id}/channels/${this.props.channelList[0]}`);
        // }
       
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentChannel !== prevProps.currentChannel) {
            this.setState({currentChannel: this.props.currentChannel})
        }
    }
    
    render () {
        let currentChannelName = this.state.currentChannel.channel_name;
        if (this.state.currentChannel.channel_name === undefined) {
            currentChannelName = "Welcome!"
        }
        return (
            <div className="channel-name-box">
                <div className="channel-name"><span>#</span>{currentChannelName}</div>
            </div>
        )
    }
}

export default ChannelShow;