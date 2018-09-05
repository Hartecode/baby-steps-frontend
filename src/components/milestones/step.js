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
		console.log(this.state.expand);
		return(
			<li className="milestoneResult">
				<div className="flexAlain">
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
						<button onClick={this.displayMore} className="pure-button">{(this.state.expand)? '-':'+'}</button>
					</div>
				</div>
				<div className={`hideStep ${(this.state.expand)? ' moreDetails':''}`}>
					<div className="pure-g-r">
						<div className="pure-u-1 pure-u-sm-3-4">
							<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas a magna non molestie. Nam et turpis massa. Proin in nisl non mi suscipit tincidunt in eu ex. Pellentesque ipsum magna, mollis a diam eu, malesuada cursus nisl. Donec eu felis sagittis diam pharetra placerat. Sed sit amet sagittis orci. Suspendisse ut placerat magna, a euismod leo. Morbi facilisis a lorem ac tristique. Nam quis neque quis velit dignissim placerat id sit amet libero. Sed mi est, tincidunt ac magna sed, condimentum lacinia lacus. Nam justo lacus, tristique sit amet ante ac, mollis ultricies dolor.
							</p>
						</div>
						<div className="pure-u-1 pure-u-sm-1-4 pure-g-r" >
							<img  
								className="pure-u-1"
								alt="baby first" 
								src= {`${SERVER_BASE_API}/uploads/photos/babypic-1535512740378-5b80ccdb7bf66b598af7c660-5b84ba0effbfde669d81cdc4.jpeg`}
								/>
						</div>
					</div>
				</div>
			</li>
		)
	}
}