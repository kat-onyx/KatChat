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
                <div>
                    {this.state.name}
                </div>
            </div>
        )
    }
}

export default ServerIndexItem;