import React from 'react';
import ServerIndexContainer from '../server/server_index_container';
import ChannelIndexContainer from '../channels/channel_index_container';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        
        // this.state = this.props
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        
        return (
            <div className="main-page-container">

                <div className="server-container-div">
                    <ServerIndexContainer props={this.props}/>
                </div>
                <div className="channel-container-div"><ChannelIndexContainer props={this.props}/></div>
                <div className="messages-feed-container-div">Messages Feed container here</div>
            </div>
        )
    }
}

export default MainComponent;