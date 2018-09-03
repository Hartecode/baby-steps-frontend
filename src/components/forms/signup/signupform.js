import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { required, nonEmpty, matches, length, isTrimmed } from '../../../validators';
import Input from '../input/input';

import { registerUser } from '../../../actions/users';
import { login } from '../../../actions/auth';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export function SignupForm(props) {

    const onSubmit = (values) => {
        const { username, password, firstName, lastName, email } = values;
        const user = { username, password, firstName, lastName, email };
        console.log(user);
        return props.
            dispatch(registerUser(user))
            .then(() => props.dispatch(login(username, password)));
    }

	return (
		<div>
			<form 
                onSubmit={onSubmit} 
                className="pure-form pure-form-aligned"  >
                <fieldset>
                    <div className=""></div>
                    <legend className="login-register-title"> 
                        Sign Up
                    </legend>
                    <label htmlFor="firstName">
                        First Name:
                    </label>
                    <br />
                    <Field component={Input} type="text" name="firstName" />
                    <br/>
                    <label htmlFor="lastName">
                        Last Name:
                    </label>
                    <br />
                    <Field component={Input} type="text" name="lastName" />
                    <br />
                    <label htmlFor="email">
                        email:
                    </label>
                    <br />
                    <Field component={Input} type="email" name="email" />
                    <br />
                    <label htmlFor="username">
                        Username:
                    </label>
                    <br />
                    <Field 
                        component={Input} 
                        type="text" 
                        name="username" 
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <br />
                    <label htmlFor="password">
                        Password:
                    </label>
                    <br />
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        validate={[required, passwordLength, isTrimmed]}
                    />
                    <br />
                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                    
                </fieldset>
                <button 
                    className="pure-button pure-input-1-2 pure-button-primary" 
                    type="submit"
                    disabled={props.pristine || props.submitting}>
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

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(SignupForm);
