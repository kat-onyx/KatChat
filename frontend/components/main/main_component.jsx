import React from 'react';


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
                    <button className="createServerButton" onClick={() => this.props.openModal('createServer')}>+</button>
                </div>

                <div className="channel-container-div">Channel (DM or not) Container Here</div>
                <div className="messages-feed-container-div">Messages Feed container here</div>
            </div>
        )
    }
}

export default MainComponent;