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
        this.handleDemo = this.handleDemo.bind(this);
    }

    // componentDidMount() {
    //    this.props.clearErrors();
    // }

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
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = {
            username: "demoUser",
            password: "123456"
        }
        this.props.processForm(demoUser);
    }

    render () {
        let emailInput = null
        let formTitle;
        let submitText;
        let demoUser = null;
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
                <><div className="form-title">Welcome back!</div> <div className="form-sub-title">We're so excited to see you again!</div></>
            )
            demoUser = (<div onClick={this.handleDemo} className="demo-user"> or <a href="" className="redirect">Try the Demo!</a></div>)
            submitText = "Continue";
        }
        return (
            <div className="login-form-container">
                <div className="title">KatChat</div>
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
                            {this.renderErrors()}
                        </div>
                        <div className="other-form-link">
                            {this.props.navLink} {demoUser}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;
