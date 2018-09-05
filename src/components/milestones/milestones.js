import React from 'react';
import './milestones.css';
import { connect } from 'react-redux';
import { fetchProtectedMilestoneData } from '../../actions/milestone';
import Step from './step';
import ImgForm from '../forms/image/imgform.js';

export class Milestones extends React.Component {
	constructor(props) {
		super(props);
		this.state={

		}
	}

	// componemtDidMount() {
	// 	this.dispatch(fetchProtectedMilestoneData());
	// }

	render(){
		console.log('milestones component:');
		console.log(this.props.milestoneData);
		const displayMilestones = () => {
			const data = this.props.nilestoneData;
			return data.map
		}

		// const imgOrUpload = (str) => {
		// 	if (str === '') {
		// 		return <ImgForm />
		// 	} else {
		// 		<img  
		// 			className="pure-u-1 pure-u-sm-1-4" 
		// 			alt="baby first" 
		// 			src= '/uploads/photos/' str
		// 			/>
		// 	}
		// }



		return (
			<div className="milestoneContainer">
				<div className="">
					<form className="pure-form">
					    <input type="text" className="pure-input-rounded pure-u-1 pure-u-sm-3-4	" />
					    <button type="submit" className="pure-button pure-u-1 pure-u-sm-1-4">Search</button>
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
					<Step />
					<Step />
					<Step />
					<Step />
					<Step />
					<Step />
					<Step />
					
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
    const { milestoneData } = state.protectedData;
    return {
        milestoneData: state.protectedData.milestoneData
    };
};

export default connect(mapStateToProps)(Milestones);
