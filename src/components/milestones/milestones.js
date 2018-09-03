import React from 'react';
import './milestones.css';

export default class Milestones extends React.Component {
	constructor(props) {
		super(props);
		this.state={

		}
	}

	render(){
		return (
			<div className="milestoneContainer">
				<div className="">
					<form className="pure-form">
					    <input type="text" className="pure-input-rounded pure-u-3-4	" />
					    <button type="submit" className="pure-button pure-u-1-4">Search</button>
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
				<ul className="milestoneList" role="listbox">
					<li className="flexAlain milestoneResult">
						<div className="milestoneTableBlock milestoneDate">
							<p>10/08/86</p>
						</div>
						<div className="milestoneTableBlock milestoneType">
							<p>Other</p>
						</div>
						<div className="milestoneTableBlock milestoneDes">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit magna massa, in tincidunt quam vulputate et. </p>
						</div>
						<div className="milestoneTableBlock milestoneExpand">
							<p>+</p>
						</div>
					</li>
					<li className="flexAlain milestoneResult">
						<div className="milestoneTableBlock milestoneDate">
							<p>10/08/86</p>
						</div>
						<div className="milestoneTableBlock milestoneType">
							<p>Other</p>
						</div>
						<div className="milestoneTableBlock milestoneDes">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit magna massa, in tincidunt quam vulputate et. </p>
						</div>
						<div className="milestoneTableBlock milestoneExpand">
							<p>+</p>
						</div>
					</li>
					<li className="flexAlain milestoneResult">
						<div className="milestoneTableBlock milestoneDate">
							<p>10/08/86</p>
						</div>
						<div className="milestoneTableBlock milestoneType">
							<p>Other</p>
						</div>
						<div className="milestoneTableBlock milestoneDes">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit magna massa, in tincidunt quam vulputate et. </p>
						</div>
						<div className="milestoneTableBlock milestoneExpand">
							<p>+</p>
						</div>
					</li>
					<li className="flexAlain milestoneResult">
						<div className="milestoneTableBlock milestoneDate">
							<p>10/08/86</p>
						</div>
						<div className="milestoneTableBlock milestoneType">
							<p>Other</p>
						</div>
						<div className="milestoneTableBlock milestoneDes">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit magna massa, in tincidunt quam vulputate et. </p>
						</div>
						<div className="milestoneTableBlock milestoneExpand">
							<p>+</p>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}