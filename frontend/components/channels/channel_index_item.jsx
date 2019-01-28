import React from "react";
import { NavLink } from "react-router-dom";

class ChannelIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.channel.channel_name,
			serverId: this.props.currentServerId
		};

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		e.preventDefault();
		this.props.onClick(this.props.channel.id);
		this.props
			.fetchMessages(this.props.channel.id)
			.then(
				this.props.history.push(
					`/servers/${this.state.serverId}/channels/${this.props.channel.id}`
				)
			);
	}
	render() {
		return (
			<div
				className={`channel-box ${
					this.props.active ? "active-channel-box" : ""
				}`}
				onClick={this.handleClick}
			>
				<span className="hash-tag">#</span> {this.state.name}
			</div>
		);
	}
}

export default ChannelIndexItem;
