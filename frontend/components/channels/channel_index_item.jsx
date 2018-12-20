import React from 'react';
import { NavLink } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.channel.channel_name,
            serverId: this.props.currentServerId,
        }
    }

    render () {
        return (
            <NavLink activeClassName="channel-box-hover" to={`/servers/${this.state.serverId}/channels/${this.props.channel.id}`}><div className="channel-box">
               <span className="hash-tag">#</span> {this.state.name}
            </div></NavLink>
        )
    }
}

export default ChannelIndexItem;