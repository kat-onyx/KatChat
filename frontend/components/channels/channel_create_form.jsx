import React from 'react';

class ChannelCreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            currentServerId: this.props.currentServerId,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ name: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        return this.props.createChannel(this.state).then(this.props.closeModal)
    }
    render() {
        return (
            <div className="addChannel">
                <form className="channel-form">
                    <div className="channel-input-box">
                        <h5 className="channel-name-label">Channel Name</h5>
                        <input value={this.state.name} onChange={this.handleChange} className="channel-name-input" />
                    </div>
                </form>
            </div>
        )
    }
}

export default ChannelCreateForm;