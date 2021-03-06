import React from 'react';


class JoinForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        return this.props.createSub(this.state).then(this.props.closeModal)
    }

    handleChange(e) {
        this.setState({ name: e.target.value })
    }

    render() {
        return (
            <div className="addServer">
                <div className="create-message">Join a server</div>
                <div className="form-long-message">Enter the name of a server you'd like to join below!</div>
                <div className="join-inner">
                    <form>
                        <div className="input-box">
                            <h5 className="name-label">Server's Name</h5>
                            <input value={this.state.name} onChange={this.handleChange} className="name-input"/>
                        </div>
                        <div className="button-box">
                            <button onClick={this.handleSubmit} type="button" className="add-button">Join</button>
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

export default JoinForm;