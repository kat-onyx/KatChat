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
            <div className="channel-box">
               <span className="hash-tag">#</span> {this.state.name}
            </div>
        )
    }
}

export default ChannelIndexItem;