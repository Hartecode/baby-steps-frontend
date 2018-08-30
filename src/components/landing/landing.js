import React from 'react';
import BabyIcon from '../../babyicon.png';
import './landing.css';

export default function LandingPage() {
	return (
		<div id="login-body">
			<div id="layer">
				<header role="banner" className="pure-g">	
					<h1 className="logo pure-u-1-2">Baby Steps</h1>
					<nav className="landingNav pure-u-1-2">
						<p> 
							<a href="https://github.com/Hartecode">
								<i className="fab fa-github navlinks"></i>
							</a>
							<a href="https://codepen.io/Hartecode/">
								<i className="fab fa-codepen navlinks"></i>
							</a>
							<a href="https://www.linkedin.com/in/seanharte/">
								<i className="fab fa-linkedin navlinks"></i>
							</a>
						</p>
					</nav>
				</header>

				<main role="main" className="containerLanding">
				
					<section className="login-register pure-g" aria-live="assertive">
						<div className="pure-u-1 pure-u-md-1-2">
							<button className="signup button-xlarge pure-button">Sign up</button>
						</div>
						<div className="pure-u-1 pure-u-md-1-2">
							<button className="login button-xlarge pure-button">Login</button>
						</div>
					</section>

					<section className="tutorial">
						<div className="tutorialDec">
							<p>Babies grow up fast, but Baby Steps helps you document every first along the way!</p>
							<p>Click the Demo button to try it out!</p>
							<div className="logButtonBox ">
								<button id="liveDemo" className="button-xlarge pure-button">Demo</button>
							</div>
						</div>

						<h1>To Get Started:</h1>
						
						<div className="pure-g badgeRes">
							<div className="pure-u-1 pure-u-sm-8-24 ">
								<div className="tutorialBadge">
									<h2>Sign Up</h2>
								<div className="tutorialBadgeIcon">
									<i className="fas fa-user-circle"></i></div>
								</div> 
							</div>

							<div className="pure-u-1 pure-u-md-8-24">
								<div className="tutorialBadge">
									<h2>Add Baby</h2>
									<img className="tutorialBadgePic" alt="baby icon" src={BabyIcon} />
								</div>
							</div>
							<div className="pure-u-1 pure-u-md-8-24">
								<div className="tutorialBadge">
									<h2>Add Milestones</h2>
									<div className="tutorialBadgeIcon">
										<i className="fas fa-star"></i>
									</div>
								</div>
							</div>
						</div>
					</section>

				</main>
			</div>
		</div>
	);
}