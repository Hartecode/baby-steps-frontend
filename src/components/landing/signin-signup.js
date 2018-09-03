import React from 'react';
import LoginForm from '../forms/login/loginform';
import SignupForm from '../forms/signup/signupform';
import './landing.css';

export default class InUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inup: 'default'
		}
		this.signInClick = this.signInClick.bind(this);
		this.signUpClick = this.signUpClick.bind(this);
	}

	//sign in click listner
	signInClick() {
		this.setState({
			inup: 'in'
		});
	}

	//sign up click listener
	signUpClick() {
		this.setState({
			inup: 'up'
		});
	}


	render() {

		const inupValue = this.state.inup;;

		const selectedHTML = () => {
			
			if (inupValue === 'default') {
				return <section className="login-register pure-g" aria-live="assertive">
					<div className="pure-u-1 pure-u-md-1-2">
						<button className="signup button-xlarge pure-button" onClick={this.signUpClick}>Sign up</button>
					</div>
					<div className="pure-u-1 pure-u-md-1-2">
						<button className="login button-xlarge pure-button" onClick={this.signInClick}>Login</button>
					</div>
				</section>
			} else if (inupValue === 'in') {
				return  <LoginForm onClick={this.signUpClick} />
			} else if (inupValue === 'up') {
				return <SignupForm onClick={this.signInClick} />
			}
		}

		return(
			<div>
				{selectedHTML()}
			</div>	
		);
	}
}
