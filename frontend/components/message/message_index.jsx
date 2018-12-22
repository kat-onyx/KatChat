import React from 'react';
import ChannelShowContainer from '../channels/channel_show_container';

import EmojiPicker from 'emoji-picker-react';


class MessageIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMessage: '',
            currentChannelName: this.props.currentChannelName,
            chatLogs: []
        }

        this.updateCurrentMessage = this.updateCurrentMessage.bind(this);
    }
    componentDidMount() {
        this.props.fetchMessages(this.props.currentChannelId);
        this.props.fetchUsers(this.props.currentServerId);
        const scroll = document.querySelector(".chat-log")
        scroll.scrollTop = scroll.scrollHeight;
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentChannelId !== prevProps.currentChannelId) {
            this.props.fetchMessages(this.props.currentChannelId);
            this.setState({chatLogs: []});
            this.props.fetchUsers(this.props.currentServerId);
        }
        const scroll = document.querySelector(".chat-log")
        scroll.scrollTop = scroll.scrollHeight;
    }

    scrollToBottom() {
        messages.scrollTop = messages.scrollHeight;
    }

    componentWillMount() {
        this.createSocket();
    }

    componentWillUnmount() {
        this.deleteSocket();
    }

    deleteSocket() {
        this.cable.subscriptions.remove(this.chats)
    }

    updateCurrentMessage(e) {
        this.setState({
            currentMessage: e.target.value
        });
    }

    createSocket() {
     
        let cable = ActionCable.createConsumer();
        this.chats = cable.subscriptions.create({
            channel: 'ChatChannel',
            
        }, {
            connected: () => {},
            received: (data) => {
                
                let chatLogs = this.state.chatLogs;
                chatLogs.push(data);
                this.setState({chatLogs: chatLogs})
            },
            create: function(message) {
                this.perform('create', {
                    body: message.body,
                    channel_id: message.channel_id,
                    author_id: message.author_id
                });
            }
        });
    }
    handleSend(e) {
        e.preventDefault();
        this.chats.create({body: this.state.currentMessage, channel_id: this.props.currentChannelId, author_id: this.props.currentUserId});
        this.setState({
            currentMessage: ''
        })
    }

    handleChatInputKeyPress(e){
        if (event.key === 'Enter') {
            this.handleSend(e);
        }
    }

    render() {
        let allMessages = this.props.messages.concat(this.state.chatLogs);
        let users = this.props.users
        let channelShow = null;
        let message = allMessages.map((message) => {
            
            let username = null;
            if (users[message.author_id]) {
                username = users[message.author_id].username;
            }
            return (<div className="message-group">
                    <div className="user-icon"></div>
                    <div className="message-content">
                    <span className="username">{username}</span>
                        <div className="message-body">
                            {message.body}
                        </div>
                     </div>
            </div>)
        })
        if (this.props.currentChannelId === undefined) {
            message = null;
        }
        if (this.props.currentChannelName !== undefined) {
            channelShow = <div className="channel-name-inner-box"><ChannelShowContainer channelName={this.props.currentChannelName} /></div>
        }
        
        return (
            <div className="message-index-box">
                {channelShow}
                <div className="chat-log">{message}</div>
                    <div className="not-form-box">
                        <div className="message-input-box">
                            <input 
                                onKeyPress={(e) => this.handleChatInputKeyPress(e)}
                                value={this.state.currentMessage} 
                                onChange={(e) => this.updateCurrentMessage(e)}
                                type="text" 
                                placeholder="Enter your message" 
                                className="chat-input"/>
                        </div>
                    </div>
            </div>
        )
    }
}

export default MessageIndex;
