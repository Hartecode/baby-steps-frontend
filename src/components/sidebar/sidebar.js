import React from 'react';
import './sidebar.css';
import BabyIcon from '../../babyicon.png';

export default function SideBar(props) {
	return (
		<div id="sideBar">
			<ul className="babyList">
				<li className="babyBadge">
					<h2 className="badgeInnerBabyName">EH</h2>
				</li>
				<li className="babyBadge">
					<h2 className="badgeInnerBabyName">tj</h2>
				</li>
				<li className="babyBadge">
					<h2 className="badgeInnerBabyName">TM</h2>
				</li>
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