import React from 'react';
import './milestones.css';
import { connect } from 'react-redux';
import Step from './step';
// import ImgForm from '../forms/image/imgform.js';

export class Milestones extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			localMilestones: null
		}
		this.handleSearch = this.handleSearch.bind(this);
	}


	handleSearch(e) {
		e.preventDefault();
		let valueItem = e.target.value;
		const storedMilestones = this.props.milestoneData;
		if (valueItem !== "") {
			//fitter the list to have the resutls which mest match search
			const searchList = storedMilestones.filter( obj => {
				let expr = new RegExp(`${valueItem}`);
				return expr.test(obj.title) || expr.test(obj.description) || expr.test(obj.type) ||expr.test(obj.date)
			});

			this.setState({
				localMilestones: searchList
			})
		} else {
			this.setState({
				localMilestones: this.props.milestoneData
			})
		}
	}

	render() {

		//returnes an array of the of html
		const milestoneListHTML = (arr) => {
			return arr.map((obj, i) => {
					return <Step 
								id={obj.id}
								key={i}
								date={obj.date}
								type={obj.type}
								title={obj.title} 
								dec={obj.description}
								img={obj.image}
							/>
			});
		}

		//displays the milestoness
		const populatingSteps = () => {
			const localMilestones = this.state.localMilestones;
			const storedMilestones = this.props.milestoneData;
			if ( localMilestones !== null ) {
				return milestoneListHTML(localMilestones);
			} else if (storedMilestones !== null) {
				this.setState({
					localMilestones: this.props.milestoneData
				})
			}
		}

		return (
			<div className="milestoneContainer">
				<div className="">
					<form className="pure-form">
					    <input type="search" name="search" onChange={this.handleSearch} className="pure-input-rounded pure-u-1"	placeholder="search" />
					</form>
				</div>

				<div className="milestoneTable">
					<div className="milestoneTableBlock milestoneDate">
						<p>Date</p>
					</div>
					<div className="milestoneTableBlock milestoneType">
						<p>Type</p>
					</div>
					<div className="milestoneTableBlock milestoneDes">
						<p>Description</p>
					</div>
					<div className="milestoneTableBlock milestoneExpand">
						<p>+/-</p>
					</div>
				</div>
				<ul className="milestoneList" role="listbox" aria-live="assertive">
					{populatingSteps()}
				</ul>
			</div>
		);
	}
	
}

const mapStateToProps = state => {
    return {
        milestoneData: state.protectedMilestones.milestoneData,
        babyData: state.protectedData.babyData
    };
};

export default connect(mapStateToProps)(Milestones);
