import React from 'react';

class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        return this.props.createServer(this.state)
    }
    handleChange(e) {
        this.setState({name: e.target.value})
    }
    render () {
        return (
            <div className="createServer">
                <div className="create-inner"> 
                    <form >
                        <div className="sassy-message">Oh, another server huh?</div>
                        <div className="create-message">Create</div>
                        <div className="long-message">Create a new Server and Invite your friends!</div>
                        <div className="input-box">
                            <h5 className="name-label">Server Name</h5>
                                <input value={this.state.name} onChange={this.handleChange} className="name-input"  /> 
                        </div>
                        <div className="button-box">
                            <button onClick={this.handleSubmit} type="button" className="create-button">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ServerForm;