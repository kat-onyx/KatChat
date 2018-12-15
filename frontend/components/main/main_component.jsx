import React from 'react';
import ServerFormContainer from '../server/server_create_container'

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
       
    }

    render() {
        return (
            <div className="main-page-container">
                <div className="server-container-div"><ServerFormContainer /></div>
                <div className="channel-container-div">Channel (DM or not) Container Here</div>
                <div className="messages-feed-container-div">Messages Feed container here</div>
            </div>
        )
    }
}

export default MainComponent;