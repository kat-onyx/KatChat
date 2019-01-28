import React from "react";
import ChannelIndexItem from "./channel_index_item";
import ServerShowContainer from "../server/server_show_container";
import { create } from "domain";
import UserShowContainer from "../user/user_show_container";

class ChannelIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedChannelId: null
		};

		this.handleChannelClick = this.handleChannelClick.bind(this);
	}
	componentDidMount() {
		if (this.props.currentServerId) {
			this.props.fetchChannels(this.props.currentServerId);
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.currentServerId !== prevProps.currentServerId) {
			this.props.fetchChannels(this.props.currentServerId);
		}
	}

	handleChannelClick(id) {
		this.setState({ selectedChannelId: id });
	}

	render() {
		// debugger;
		const channels = this.props.channels.map(channel => {
			return (
				<ChannelIndexItem
					key={channel.id}
					channel={channel}
					currentServerId={this.props.currentServerId}
					onClick={this.handleChannelClick}
					fetchMessages={this.props.fetchMessages}
					active={this.state.selectedChannelId === channel.id}
					history={this.props.history}
				/>
			);
		});

		let createButton = null;

		if (
			this.props.currentServerId !== undefined &&
			this.props.serverOwnerId === this.props.currentUserId
		) {
			createButton = (
				<button
					onClick={() => this.props.openModal("createChannel")}
					className="channel-button"
				>
					+
				</button>
			);
		}
		return (
			<div className="channel-index-container">
				<div className="server-show">
					<ServerShowContainer
						servers={this.props.servers}
						channels={this.props.channelObjs}
					/>
				</div>
				<div className="channel-list">
					<div className="channel-list-title">Text Channels</div>
					<div className="channel-list-add">{createButton}</div>
				</div>
				<div className="channel-list-item">{channels}</div>
				<div className="user-show-container">
					<UserShowContainer />
				</div>
			</div>
		);
	}
}

export default ChannelIndex;
