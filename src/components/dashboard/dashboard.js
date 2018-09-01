import React from 'react';
import SideBar from '../sidebar/sidebar';
import './dashboard.css';
import Album from './album.jpg';

export default class DashBoard extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div id="daahboardContainer">
				<div className="">
					<SideBar />
				</div>
				<div className="mainContainer">
					<header role="banner" className="">	
						<h1 className="logo ">Baby Steps</h1>
						<nav className="landingNav ">
							<div></div>
						</nav>
					</header>

					<main role="main" className="bodyContainer pure-g-r">
						<div className="pure-u-1 pure-u-md-1-2 ">
							<h2 className="BabyFirstName">Eli</h2>
							<p>Baby Info</p>
						</div>
						<div className="pure-u-1 pure-u-md-1-2">
							<img id="albumPic" alt="album image" src={Album} />
							<p>Milestone Album</p>
						</div>
						

					</main>
				</div>
				
			</div>
		);
	}
}