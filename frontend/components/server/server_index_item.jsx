import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.server.name,
            id: this.props.server.id
        }

    }


    render() {
        return (
            <div>
                <div className="server-icon">
                    <Link to={`/servers/${this.state.id}`}>{this.state.name[0]}</Link>
                </div>
            </div>
        )
    }
}

export default ServerIndexItem;