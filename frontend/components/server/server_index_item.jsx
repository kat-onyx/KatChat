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
        this.handleClick = this.handleClick.bind(this);
    }

    // toggleFocus() {
    //     const currentState = this.state.active;
    //     this.setState({ active: !currentState})
    // }
    handleClick(e) {
       
        e.preventDefault();
        this.props.fetchChannels(this.state.id).then(this.props.ownProps.history.push(`/servers/${this.state.id}`))
    }

    render() {
    
        return (
            <div>
                <div className="server-icon" onClick={this.handleClick}>
                        {this.state.name[0]} <span className="server-name-hover">{this.state.name}</span>
                </div>
            </div>
        )
    }
}

export default ServerIndexItem;