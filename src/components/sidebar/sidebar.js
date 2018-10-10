import React from 'react';
import { connect } from 'react-redux';
import './sidebar.css';
import AddBaby  from './addbaby';
import { changeSelectedBaby } from '../../actions/baby';
import { fetchProtectedMilestoneData } from '../../actions/milestone';

export class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayForm: false
		}
		this.changeSeclected = this.changeSeclected.bind(this);
		this.addBabyClick = this.addBabyClick.bind(this);
	}
	
	// click listner which obtains the id number of badges
	// which is sent to reducer to find the index
	changeSeclected(e) {
		let id = e.target.id.split('-')[1];

		const element = document.querySelectorAll('.babyBadge');
		const firstBadgeID = element[0].id.split('-')[1];

		if( id !== firstBadgeID) {
			this.props.dispatch(changeSelectedBaby(id));
			this.props.dispatch(fetchProtectedMilestoneData(id));
		}
	}

	//added baby form button
	addBabyClick() {
		console.log('clicked');
	}

	render(){
		//this generates the list of babys with the current selected baby on top
		const babyBadgeGenerator = ()=> {
			let babys = this.props.babyData	;
			const selectedBaby = this.props.selectedBaby;
			if ( selectedBaby !== 0) {
				const allButSelected = babys.filter( (b, index) => index !== selectedBaby); 
				babys = [babys[selectedBaby], ...allButSelected];
			}
		
			if (babys) {
				return babys.map( (b, i) => {
					return <li id={`babyBadge-${b.id}`} key={i} onClick={this.changeSeclected} className="babyBadge">
							<h2 id={`babyName-${b.id}`} className="badgeInnerBabyName">{b.firstName}</h2>
						</li>
				});
			}
		}
		console.log(this.props.mobileDisplay)

		return (
			<div id="sideBar" className={(this.props.mobileDisplay)? 'expand': ''}>
				<i  onClick={this.props.onClick} class="far fa-times-circle"></i>
				<ul className="babyList">
					{babyBadgeGenerator()}
				</ul>
				<AddBaby />
				<div className="doubleDown" >
					<i onClick={this.addBabyClick} className="fas fa-angle-double-down"></i>
				</div>

			</div>
		);
	}
}

const mapStateToProps = state => {
    const { babyData,selectedBaby } = state.protectedData;
    return {
        babyData: state.protectedData.babyData,
        selectedBaby: state.protectedData.selectedBaby
    };
};

export default connect(mapStateToProps)(SideBar);