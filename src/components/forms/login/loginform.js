import React from 'react';

export default function LoginForm(props) {
	const onSubmit = (e) => {
		e.preventDefault();
		const userName = e.target.username.value;
		const password = e.target.password.value;

		console.log(userName);
		console.log(password);
	}

	return (
		<div>
			<form onSubmit={onSubmit} className="pure-form pure-form-aligned"  >
                <fieldset>
                    <div className="loginError"></div>
                    <legend className="login-register-title"> 
                    	LOGIN
                    </legend>
                    <label htmlFor="username">
                    	Username:
                    </label>
                    <br />
                    <input className="pure-input-1-2 username-login" type="text" name="username" autoComplete="on" required />
                    <br />
                    <label htmlFor="password">
                    	Password:
                    </label>
                    <br />
                    <input className="pure-input-1-2 password-login" type="password" name="password" autoComplete="on" required />
                </fieldset>
                <button className="pure-button pure-input-1-2 pure-button-primary" type="submit">
                    Submit
                </button>
            </form>
            <a onClick={props.onClick} className="signup">
            	<p className="toggleReg">
            		Sign up
            	</p>
            </a>
		</div>
	)
}