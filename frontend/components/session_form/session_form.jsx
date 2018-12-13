import React from 'react';

// formTitleForFormType = {
//     'signup': "Create an account",
//     'signin': "Welcome back!"
// }

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            email: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return(e) => {
            this.setState({[field]: e.target.value})
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => {
                    <li key={`error-${i}`}>
                        { error }
                    </li>
                })}
            </ul>
        );
    }

    render () {
        let emailInput = null
        if (this.props.formType === 'Create an account') {
            emailInput = (
                <React.Fragment>
                    <br/>
                    <label>
                        Email
                        <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"/>
                    </label>
                </React.Fragment>
            )
        }
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div>
                        {this.props.formType}
                        <div className="login-form">
                            {emailInput}
                            <br/>
                            <label>
                                Username
                                <input type="text" value={this.state.username} onChange={this.update('username')} className="login-input"/>
                            </label>
                            <br/>
                            <label>
                                Password
                                <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input"/>
                            </label>
                            <br/>
                            <input className="session-submit" type="submit" value="Login"/>
                        </div>
                        <div>{this.props.navLink}</div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;
