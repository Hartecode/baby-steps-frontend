import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../require/requires-login';
import SideBar from '../sidebar/sidebar';
import Milestones from '../milestones/milestones';
import { fetchProtectedBabyData } from '../../actions/baby';
import './dashboard.css';
import Album from './album.jpg';

export class DashBoard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(fetchProtectedBabyData());
	}


	render(){
		const selectBabyObj = this.props.babyData[this.props.selectedBaby];
		const currentBaby = () => (selectBabyObj != undefined) ? selectBabyObj.firstName : '';

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
									{currentBaby()}
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

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    const { babyData,selectedBaby } = state.protectedData;
    return {
        user: state.auth.currentUser.user,
        babyData: state.protectedData.babyData,
        selectedBaby: state.protectedData.selectedBaby
    };
};

export default requiresLogin()(connect(mapStateToProps)(DashBoard));

