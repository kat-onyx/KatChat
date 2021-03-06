import React from "react";
import ChannelShowContainer from "../channels/channel_show_container";

import EmojiPicker from "emoji-picker-react";
import SubscriberIndex from "../user/subscriber_index";

class MessageIndex extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentMessage: "",
			currentChannelName: this.props.currentChannelName,
			chatLogs: []
		};

		this.updateCurrentMessage = this.updateCurrentMessage.bind(this);
		this.handleTextareaSize = this.handleTextareaSize.bind(this);
	}
	componentDidMount() {
		if (this.props.currentChannelId !== undefined) {
			this.props.fetchMessages(this.props.currentChannelId);
		}
		// this.props.fetchMessages(this.props.currentChannelId);
		this.props.fetchUsers(this.props.currentServerId);
		const scroll = document.querySelector(".chat-log");
		scroll.scrollTop = scroll.scrollHeight;
	}

	componentDidUpdate(prevProps) {
		// debugger
		if (this.props.currentChannelId !== prevProps.currentChannelId) {
			if (this.props.currentChannelId !== undefined) {
				this.props.fetchMessages(this.props.currentChannelId);
			}
			this.setState({ chatLogs: [] });
			this.props.fetchUsers(this.props.currentServerId);
		}
		const scroll = document.querySelector(".chat-log");
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
		this.chats = cable.subscriptions.create(
			{
				channel: "ChatChannel"
			},
			{
				connected: () => {},
				received: data => {
					let chatLogs = this.state.chatLogs;
					chatLogs.push(data);
					this.setState({ chatLogs: chatLogs });
				},
				create: function(message) {
					this.perform("create", {
						body: message.body,
						channel_id: message.channel_id,
						author_id: message.author_id
					});
				}
			}
		);
	}
	handleSend(e) {
		e.preventDefault();
		this.chats.create({
			body: this.state.currentMessage,
			channel_id: this.props.currentChannelId,
			author_id: this.props.currentUserId
		});
		this.setState({
			currentMessage: ""
		});
	}

	handleChatInputKeyPress(e) {
		if (event.key === "Enter") {
			this.handleSend(e);
		}
	}

	handleTextareaSize(e) {
		e.target.style.height = "auto";
		if (e.target.scrollHeight < 146) {
			e.target.style.height = e.target.scrollHeight - 20 + "px";
		} else {
			e.target.style.height = 145 + "px";
		}
	}

	render() {
		let allMessages = this.props.messages.concat(this.state.chatLogs);
		let users = this.props.users;
		let channelShow = null;
		let message = allMessages.map(message => {
			let username = null;
			if (users[message.author_id]) {
				username = users[message.author_id].username;
			}
			return (
				<div className="message-group">
					<div className="user-icon" />
					<div className="message-content">
						<span className="username">{username}</span>
						<div className="message-body">{message.body}</div>
					</div>
				</div>
			);
		});
		if (this.props.currentChannelId === undefined) {
			message = (
				<div className="new-channel-message">
					{"Create some channels (or bug your Server admin to do it) !"}
				</div>
			);
			channelShow = (
				<div className="channel-name-inner-box">
					<ChannelShowContainer />
				</div>
			);
		}
		if (this.props.currentChannelName !== undefined) {
			channelShow = (
				<div className="channel-name-inner-box">
					<ChannelShowContainer channelName={this.props.currentChannelName} />
				</div>
			);
		}

		return (
			<div className="message-subscriber-box">
				<div className="message-index-box">
					{channelShow}
					<div className="chat-log">{message}</div>
					<div className="not-form-box">
						<div className="message-input-box">
							<textarea
								rows="1"
								onKeyDown={e => this.handleChatInputKeyPress(e)}
								value={this.state.currentMessage}
								onChange={e => this.updateCurrentMessage(e)}
								type="text"
								placeholder="Enter your message"
								className="chat-input"
								style={{ height: "auto" }}
								onKeyUp={this.handleTextareaSize}
							/>
						</div>
					</div>
				</div>
				<div className="subscribers-box-outer">
					<SubscriberIndex subscribers={this.props.users} />
				</div>
			</div>
		);
	}
}

export default MessageIndex;
