import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { logout } from '../actions/session_actions';
import MainComponentContainer from './main/main_component_container';
import ChannelCreateContainer from './channels/channel_create_container';
import Modal from './modal/modal';

const App = (props) => (
    <div>
        <Modal />
        <ProtectedRoute exact path="/servers/:serverId" component={Modal} />
        <ProtectedRoute exact path="/servers/:serverId/channels/:channelId" component={Modal} />
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/servers/:serverId" component={MainComponentContainer} />
            <ProtectedRoute exact path="/servers/:serverId/channels/:channelId" component={MainComponentContainer} />
            <ProtectedRoute path="/" component={MainComponentContainer} />
        </Switch>
        <button onClick={() => props.dispatch(logout())}>Logout</button>
    </div>
);

export default App;