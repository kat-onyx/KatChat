import React from "react";
import { NavLink } from "react-router-dom";

class SplashPage extends React.Component {
	render() {
		return (
			<div className="splash-contents-container">
				<div className="splash-nav">
					<div className="splash-nav-left">
						<div className="splash-nav-image" />
						<div className="splash-nav-title">KatChat</div>
					</div>
					<div className="splash-nav-right">
						<a href="https://github.com/kat-onyx">
							<div className="splash-nav-github-icon" />
						</a>
						<a href="https://www.linkedin.com/in/sarah-peters-a2695b8a/">
							<div className="splash-nav-linkedin-icon" />
						</a>

						<NavLink to="/login">
							<button className="splash-nav-login"> Login </button>
						</NavLink>
					</div>
				</div>
				<div className="splash-about-images">
					<div className="splash-about">
						<h1 className="splash-about-greeting">Welcome to KatChat.</h1>
						<p>
							It's time to ditch Skype and Teamspeak. KatChat is a free live
							chatting app for gamers and non-gamers alike. Simplify your life.
						</p>
						<NavLink to="/login">
							<button className="splash-login-button">Open KatChat</button>
						</NavLink>
					</div>
					<div className="splash-images">
						<div className="splash-images-inner">
							Img here
							<div className="desktop" />
							<div className="bomb" />
							<div className="laptop" />
							<div className="android" />
							<div className="iphone" />
							<div className="controller" />
							<div className="coin" />
							<div className="box" />
							{/* <img src="assets/katchat-iphone" className="iphone" />
							<img src="assets/katchat-controller" className="controller" />
							<img src="assets/katchat-coin" className="coin" />
							<img src="assets/katchat-box" className="box" /> */}{" "}
							*/}
						</div>
					</div>
				</div>
				<div className="splash-footer">
					<div className="splash-footer-left">
						<h2> Are you ready to join? </h2>
						{/* <p>Several assets on this page were borrowed from Discord.</p> */}
					</div>
					<div className="splash-footer-right">
						<NavLink to="/signup">
							<button>Sign Up Now</button>
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default SplashPage;
