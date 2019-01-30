import React from "react";
import SplashPageContainer from "./session_form/splashPageContainer";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import MainComponentContainer from "./main/main_component_container";
import Modal from "./modal/modal";

const App = props => (
	<div>
		<Modal />
		<ProtectedRoute exact path="/servers/:serverId" component={Modal} />
		<ProtectedRoute
			exact
			path="/servers/:serverId/channels/:channelId"
			component={Modal}
		/>
		<Switch>
			<AuthRoute path="/splash" component={SplashPageContainer} />

			<AuthRoute path="/signup" component={SignupFormContainer} />
			<AuthRoute path="/login" component={LoginFormContainer} />
			<ProtectedRoute
				exact
				path="/servers/:serverId"
				component={MainComponentContainer}
			/>
			<ProtectedRoute
				exact
				path="/servers/:serverId/channels/:channelId"
				component={MainComponentContainer}
			/>
			<ProtectedRoute path="/" component={MainComponentContainer} />
		</Switch>
	</div>
);

export default App;
