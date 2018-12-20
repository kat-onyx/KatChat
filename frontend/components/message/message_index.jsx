import React from 'react';
import MessageFormContainer from './message_form_container';


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
        const scroll = document.querySelector(".chat-log")
        scroll.scrollTop = scroll.scrollHeight;
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentChannelId !== prevProps.currentChannelId) {
            this.props.fetchMessages(this.props.currentChannelId);
            this.setState({chatLogs: []});
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
                // this.props.createMessage(data)
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
        let message = allMessages.map((message) => {
            // debugger
            let username = users[message.author_id].username
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
    
        return (
            <div className="message-index-box">
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
