import React from 'react';


class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.server.name
        }
    }
    render() {
        return (
            <div>
                <div className="server-icon">
                    {this.state.name[0]}
                </div>
            </div>
        )
    }
}

export default ServerIndexItem;