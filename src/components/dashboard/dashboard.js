import React from 'react';
import { connect } from 'react-redux';
import SideBar from '../sidebar/sidebar';
import Milestones from '../milestones/milestones';
import './dashboard.css';
import Album from './album.jpg';

export class DashBoard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const userId = localStorage.getItem('userId');
		if (userId === null) {
        window.location = '/';
		}
		// this.props.dispatch(fetchLoginUser(userId));
	}

	render(){
		
		return(
			<div id="" className="flexAlain">
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

					<main role="main" className="bodyContainer ">
						<div className="pure-g topContainer">
							<div className="pure-u-md-1-2 ">
								<h2 className="BabyFirstName">
									{this.props.babys[this.props.selectedBaby].firstName}
								</h2>
								<p>Baby Info</p>
							</div>
							<div className="pure-u-md-1-2 albumContainer">
								<img id="albumPic" alt="baby album" src={Album} />
							</div>
						</div>
						
						<div className="pure-u-1">
							<Milestones />
						</div>

					</main>
				</div>
				
			</div>
		);
	}
}

const mapStateToProps = state => ({
    user: state.user,
    babys: state.babys,
    selectedBaby: state.selectedBaby
});

export default connect(mapStateToProps)(DashBoard);