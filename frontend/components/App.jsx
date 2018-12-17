import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { logout } from '../actions/session_actions';
import MainComponentContainer from './main/main_component_container';
import Modal from './modal/modal';

const App = (props) => (
    <div>
        <Modal />
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/" component={MainComponentContainer} />
            <ProtectedRoute exact path="/servers/:serverId" component={MainComponentContainer} />
        </Switch>
        <button onClick={() => props.dispatch(logout())}>Logout</button>
    </div>
);

export default App;