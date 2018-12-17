import React from 'react';

class AddServer extends React.Component {
    constructor(props) {
        super(props);
    
    }

    render () {
        return (
            <div className="addServer">
                <div className="sassy-message">Oh, another server huh?</div>
                <div className="server-choice-boxes">
                        <div className="choice-box"> 
                            <div className="create-message">Create</div>
                            <div className="long-message">Create a new Server and Invite your friends!</div>
                            <div className="create-img"></div>
                            <button type="button" className="add-button" onClick={() => this.props.openModal('createServer')}>
                                Create Server
                            </button>
                        </div>
                        <div className="choice-box">
                            <div className="create-message">Join</div>
                            <div className="long-message">Enter a server name to your friends!</div>
                            <div className="join-img"></div>
                            <button type="button" className="add-button" onClick={() => this.props.openModal('joinServer')}>
                                Join Server
                            </button>
                        </div> 
                </div>         
            </div>
        )
    }
}

export default AddServer;
