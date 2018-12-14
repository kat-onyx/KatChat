import React from 'react';

class MainComponent extends React.Component {
    
    render() {
        return (
            <div className="main-page-container">
                <div className="server-container-div">Server Container Here</div>
                <div className="channel-container-div">Channel (DM or not) Container Here</div>
                <div className="messages-feed-container-div">Messages Feed container here</div>
            </div>
        )
    }
}

export default MainComponent;