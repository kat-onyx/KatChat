import React from 'react';

class ServerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            id: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        return this.props.processForm(this.state)
    }
    handleChange() {
        return (e) => {
            this.setState({name: e.target.value})
        }
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <button value={this.state.name} onChange={this.handleChange}></button>
                
            </form>
        )
    }
}

export default ServerForm;