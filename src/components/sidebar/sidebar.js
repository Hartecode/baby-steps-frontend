import React from 'react';
import { connect } from 'react-redux';
import './sidebar.css';
import BabyIcon from '../../babyicon.png';
import { changeSelectedBaby } from '../../actions';

export function SideBar(props) {
	

	//this generates the list of babys with the current selected baby on top
	const babyBadgeGenerator = ()=> {
		let babys = props.babys;
		const selectedBaby = props.selectedBaby;
		if( selectedBaby !== 0) {
		const allButSelected = babys.filter( (b, index) => index !== selectedBaby); 
		babys = [babys[selectedBaby], ...allButSelected];
		}
		console.log(babys);
		return babys.map( (b, i) => {
			return <li id={`babyBadge-${b.id}`} key={i} onClick={changeSeclected} className="babyBadge">
					<h2 id={`babyName-${b.id}`} className="badgeInnerBabyName">{b.firstName}</h2>
				</li>
		});
	}

	// click listner which obtains the id number of badges
	// which is sent to reducer to find the index
	const changeSeclected = (e) => {
		let id = e.target.id.split('-')[1];

		const element = document.querySelectorAll('.babyBadge');
		const firstBadgeID = element[0].id.split('-')[1];

		if( id !== firstBadgeID) {
			props.dispatch(changeSelectedBaby(id));
		}
	}

	return (
		<div id="sideBar">
			<ul className="babyList">
				{babyBadgeGenerator()}
			</ul>
			<div className="addBadge">
				<h2>Add Baby</h2>
				<img className="tutorialBadgePic" alt="baby icon" src={BabyIcon} />
			</div>
			<div className="doubleDown">
				<i className="fas fa-angle-double-down"></i>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
    babys: state.babys,
    selectedBaby: state.selectedBaby
});

export default connect(mapStateToProps)(SideBar);