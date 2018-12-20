import React from 'react';
import ServerIndexContainer from '../server/server_index_container';
import ChannelIndexContainer from '../channels/channel_index_container';
import ServerShowContainer from '../server/server_show_container';
import MessageIndexContainer from '../message/message_index_container';

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
                {/* <div><ServerShowContainer props={this.props}/></div> */}
                <div className="messages-feed-container-div"><MessageIndexContainer props={this.props}/></div>
                <div className="online-padding">Online</div>
            </div>
        )
    }
}

export default MainComponent;