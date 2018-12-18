import React from 'react';
import ServerIndexContainer from '../server/server_index_container';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
       
    }

    render() {
        
        return (
            <div className="main-page-container">

                <div className="server-container-div">
                    <ServerIndexContainer />
                </div>
                <div className="channel-container-div"><button onClick={() => this.props.openModal('createChannel')}>Create Channel</button></div>
                <div className="messages-feed-container-div">Messages Feed container here</div>
            </div>
        )
    }
}

export default MainComponent;