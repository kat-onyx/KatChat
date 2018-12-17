import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: this.props.server.name,
            id: this.props.server.id,
            active: false
        }
    }

    toggleFocus() {
        const currentState = this.state.active;
        this.setState({ active: !currentState})
    }

    render() {
        return (
            <div>
                <div className={this.state.active ? "server-icon.active" : "server-icon"}>
                    <Link to={`/servers/${this.state.id}`}
                        onClick={this.toggleFocus}
                    >
                        {this.state.name[0]}
                    </Link>
                </div>
            </div>
        )
    }
}

export default ServerIndexItem;