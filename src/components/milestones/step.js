import React from 'react';
import { SERVER_BASE_API } from '../../config';
import './milestones.css';

export default class Step extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: false
		}
		this.displayMore = this.displayMore.bind(this);
	}

	displayMore() {
		this.setState(prevState => ({ 
			expand: !prevState.expand
		}));
	}

	render() {

		return(
			<li id={this.props.id} className="milestoneResult">
				<div className="flexAlain">
					<div className="milestoneTableBlock milestoneDate">
						<p>
							{this.props.date}
						</p>
					</div>
					<div className="milestoneTableBlock milestoneType">
						<p>
							{(this.props.type !== "")? this.props.type: "other"}
						</p>
					</div>
					<div className="milestoneTableBlock milestoneDes">
						<p>
							{this.props.title}
						</p>
					</div>
					<div className="milestoneTableBlock milestoneExpand">
						<button onClick={this.displayMore} className="pure-button">
							{(this.state.expand)? '-':'+'}
						</button>
					</div>
				</div>
				<div className={`hideStep ${(this.state.expand)? ' moreDetails':''}`}>
					<div className="pure-g-r">
						<div className="pure-u-1 pure-u-sm-3-4">
							<p>
								{this.props.dec}
							</p>
						</div>
						<div className="pure-u-1 pure-u-sm-1-4 pure-g-r" >
							<img  
								className="pure-u-1"
								alt={this.props.title} 
								src= {`${SERVER_BASE_API}/uploads/photos/${this.props.img}`}
								/>
						</div>
					</div>
				</div>
			</li>
		)
	}
}