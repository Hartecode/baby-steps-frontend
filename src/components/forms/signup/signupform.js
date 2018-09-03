import React from 'react';

export default function SignupForm(props) {

    const onSubmit = (e) => {
        e.preventDefault();
        const userName = e.target.username.value;
        const password = e.target.password.value;
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;

        console.log(userName);
        console.log(password);
        console.log(firstName);
        console.log(lastName);
        console.log(email);
    }
	return (
		<div>
			<form onSubmit={onSubmit} className="pure-form pure-form-aligned"  >
                <fieldset>
                    <div className=""></div>
                    <legend className="login-register-title"> 
                        Sign Up
                    </legend>
                    <label htmlFor="username">
                        Username:
                    </label>
                    <br />
                    <input className="pure-input-1-2 username-signup" type="text" name="username" pattern=".{1,}" title="1 characters minimum" autoComplete="on" required />
                    <br />
                    <label htmlFor="password">
                        Password:
                    </label>
                    <br />
                    <input className="pure-input-1-2 password-signup" type="text" name="password" pattern=".{10, 72}" title="3 characters minimum" autoComplete="on" required />
                    <br />
                    <label htmlFor="firstName">
                        First Name:
                    </label>
                    <br />
                    <input className="pure-input-1-2 firstname-signup" type="test" name="firstName" autoComplete="on" required />
                    <br/>
                    <label htmlFor="lastName">
                        Last Name:
                    </label>
                    <br />
                    <input className="pure-input-1-2 lastname-signup" type="test" name="lastName" autoComplete="on" required />
                    <br />
                    <label htmlFor="email">
                        email:
                    </label>
                    <br />
                    <input className="pure-input-1-2 email-signup" type="email" name="email" autoComplete="on" required />
                    
                </fieldset>
                <button className="pure-button pure-input-1-2 pure-button-primary" type="submit">
                    Submit
                </button>
            </form>
            <a href="#" onClick={props.onClick} className="login">
                <p className="toggleReg">
                    LogIn
                </p>
            </a>
		</div>
	)
}