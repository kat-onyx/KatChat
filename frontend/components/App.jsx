import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Switch } from 'react-router-dom'

const App = () => (
    <div>
        <header>
            <h1>Discord Clone</h1>
        </header>
        <Switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
            <Route path="/" />
        </Switch>
    </div>
);

export default App;