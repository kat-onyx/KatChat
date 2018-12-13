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
        let formTitle;
        let submitText;
        if (this.props.formType === 'Create an account') {
            emailInput = (
                <React.Fragment>
                    <br/>
                    <div>
                        <h5 className="label-style">Email</h5>
                        <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"/>
                    </div>
                </React.Fragment>
            )
            formTitle = (
                <div className="form-title">Create an account</div>
            )
            submitText = "Login";
        } else {
            formTitle = (
                <><div className="form-title">Welcome back</div> <div className="form-sub-title">We're so glad to see you!</div></>
            )
            submitText = "Continue"
        }
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">
                        {formTitle}
                        <div>
                            {emailInput}
                            <br/>
                            <div>
                                <h5 className="label-style">Username</h5>
                                <input type="text" value={this.state.username} onChange={this.update('username')} className="login-input"/>
                            </div>
                            <br/>
                            <div>
                                <h5 className="label-style">Password</h5>
                                <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input"/>
                            </div>
                            <br/>
                            <button className="session-submit" type="submit">{submitText}</button>
                        </div>
                        <div>{this.props.navLink}</div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;
