import React from 'react';

class ChannelCreateForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            channel_name: "",
            currentServerId: this.props.currentServerId,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ channel_name: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
  
        return this.props.createChannel(this.state).then(this.props.closeModal)
    }
    render() {
        return (
            <div className="addChannel">
                <form className="channel-form">
                    <div className="channel-form-message">Create Text Channel</div>
                    <div className="input-box">
                        <h5 className="channel-name-label">Channel Name</h5>
                        <input value={this.state.name} onChange={this.handleChange} className="channel-name-input" />
                    </div>
                    <div className="create-button-div">
                        <button type="button" className="create-button" onClick={this.handleSubmit}>Create Channel</button>
                        <button className="cancel-button" onClick={this.props.closeModal}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ChannelCreateForm;