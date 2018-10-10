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
		this.state = {
			mobileDisplay: false
		}
		this.mobileClick = this.mobileClick.bind(this);
	}


	componentWillMount() {
		this.props.dispatch(fetchProtectedBabyData());
	}

	mobileClick() {
		console.log('click');
		this.setState( prevState => ({
			mobileDisplay: !prevState.mobileDisplay
		}))
	}


	render(){
		const selectBabyObj = (this.props.babyData)? this.props.babyData[this.props.selectedBaby] : '';
		const currentBaby = () => (selectBabyObj != undefined) ? selectBabyObj.firstName : '';
		console.log(this.state.mobileDisplay);
		return(
			<div id="" className="flexAlain">
				<div className="">
					<SideBar 
						mobileDisplay={this.state.mobileDisplay}
						onClick={this.mobileDisplay}
					/>
				</div>
				<div className="mainContainer">
					<header role="banner" className="">	
						
						<h1 onClick={this.mobileClick} className="logo ">
							<i className={(this.state.mobileDisplay)? 'fas fa-bars mobileBars hide' : 'fas fa-bars mobileBars '} ></i>
							Baby Steps
						</h1>
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

