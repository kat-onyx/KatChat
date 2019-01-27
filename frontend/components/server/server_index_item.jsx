import React from 'react';
import { Link } from 'react-router-dom';

const abbreviateName = name => name.split(" ").map(word => word[0])

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.onClick(this.props.id);
        this.props.fetchChannels(this.props.id)
            .then(this.props.ownProps.history.push(`/servers/${this.props.id}`))
    }

    render() {
        return (
            <div>
                <div className={`server-icon ${this.props.active ? 'server-icon-active' : ''}`} onClick={this.handleClick}>
                        {abbreviateName(this.props.name)} <span className="server-name-hover">{this.props.name}</span>
                </div>
            </div>
        )
    }
}

export default ServerIndexItem;