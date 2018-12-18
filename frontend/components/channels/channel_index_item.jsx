import React from 'react';

class ChannelIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.channel.channel_name
        }
    }

    render () {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default ChannelIndexItem;