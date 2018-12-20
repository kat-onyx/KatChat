import React from 'react';
import MessageFormContainer from './message_form_container';


class MessageIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMessage: '',
            chatLogs: []
        }

        this.updateCurrentMessage = this.updateCurrentMessage.bind(this);
    }
    componentDidMount() {
        this.props.fetchMessages(this.props.currentChannelId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentChannelId !== prevProps.currentChannelId) {
            this.props.fetchMessages(this.props.currentChannelId);
            this.setState({chatLogs: []});
        }
    }

    // componentWillUnmount() {
    //     if (this.props.currentServerId !== prevProps.currentServerId) {
    //         this.setState({ chatLogs: [] });
    //     }
    // }

    componentWillMount() {
        this.createSocket();
    }

    updateCurrentMessage(e) {
        this.setState({
            currentMessage: e.target.value
        });
    }

    createSocket() {
     
        let cable = ActionCable.createConsumer(`ws://localhost:3000/cable`);
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
                    channelId: message.channelId,
                    authorId: message.authorId
                });
            }
        });
    }
    handleSend(e) {
        e.preventDefault();
        this.chats.create({body: this.state.currentMessage, channelId: this.props.currentChannelId, authorId: this.props.currentUserId});
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

        let message = allMessages.map((message) => {
            return (<div className="message-info">
                {message.body}
            </div>)
        })
        if (this.props.currentChannelId === undefined) {
            message = null;
        }
       
        return (
            <div className="message-index-box">
                <div className="chat-log">{message}</div>
                <div className="message-input-box">
                    <input 
                        onKeyPress={(e) => this.handleChatInputKeyPress(e)}
                        value={this.state.currentMessage} 
                        onChange={(e) => this.updateCurrentMessage(e)}
                        type="text" 
                        placeholder="Enter your message" 
                        className="chat-input"/>
                    {/* <button onClick={(e) => this.handleClick(e) }>Send</button> */}
                </div>
            </div>
        )
    }
}

export default MessageIndex;
