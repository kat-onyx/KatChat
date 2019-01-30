import React from "react";

class SplashPage extends React.Component {
	render() {
		return (
			<div className="splash-contents-container">
				<div className="splash-nav">
					<div className="splash-nav-title">KatChat</div>
				</div>
				<div className="splash-about-images">
					<div className="splash-about">
						<h1 className="splash-about-greeting">Welcome to KatChat.</h1>
						<p>
							It's time to ditch Skype and Teamspeak. KatChat is a free live
							chatting app for gamers and non-gamers alike. Simplify your life.
						</p>
						<button>Open KatChat</button>
					</div>
					<div className="splash-images">
						<div className="splash-images-inner">
							Img here
							<img src="assets/katchat-desktop" className="desktop" />
							<img src="assets/katchat-bomb" className="bomb" />
							<img src="assets/katchat-laptop" className="laptop" />
							<img src="assets/katchat-android" className="android" />
							<img src="assets/katchat-iphone" className="iphone" />
							<img src="assets/katchat-controller" className="controller" />
							<img src="assets/katchat-coin" className="coin" />
							<img src="assets/katchat-box" className="box" />
						</div>
					</div>
				</div>
				<div className="splash-footer">
					Disclaimer: Assets were borrowed from Discord.
				</div>
			</div>
		);
	}
}

export default SplashPage;
