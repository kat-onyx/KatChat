import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { logout } from '../actions/session_actions';
import MainComponent from './main/main_component';

const App = (props) => (
    <div>
        {/* <header>
            <h1>Discord Clone</h1>
        </header> */}
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/" component={MainComponent}/>
        </Switch>
        <button onClick={() => props.dispatch(logout())}>Logout</button>
    </div>
);

export default App;