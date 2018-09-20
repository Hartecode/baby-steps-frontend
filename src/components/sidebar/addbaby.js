import React from 'react';
import BabyIcon from '../../babyicon.png';


export default class AddBaby extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayForm: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			displayForm: !prevState.displayForm
	    }));
	}

	render() {
		return(
			<div onClick={this.handleClick} className="addBadge">
				<h2>Add Baby</h2>
				<img className="tutorialBadgePic" alt="baby icon" src={BabyIcon} />
			</div>
		)
	}
}