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

        this.props.createServer(this.state).then(this.props.closeModal())
    }
    handleChange(e) {
        this.setState({name: e.target.value})
    }
    render () {
        return (
            <div className="addServer">
                <div className="create-message">Create Your Server</div>
                <div className="form-long-message">By creating a server, you will have access to free text chat amongst your friends.</div>
                <div className="create-inner"> 
                    <form >
                        <div className="input-box">
                            <h5 className="name-label">Server Name</h5>
                                <input value={this.state.name} onChange={this.handleChange} className="name-input"  /> 
                        </div>
                        <div className="button-box">
                            <button onClick={this.handleSubmit} type="button" className="add-button">Create</button>
                        </div>
                    </form>
                    <div className="back-box">
                        <button onClick={() => this.props.openModal('addServer')} type="button" className="back-button">Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServerForm;