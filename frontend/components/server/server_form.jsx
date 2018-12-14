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
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
            </form>
        )
    }
}

export default ServerForm;