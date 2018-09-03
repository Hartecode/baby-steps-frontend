import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { required, nonEmpty } from '../../../validators';
import Input from '../input/input';
import { login } from '../../../actions/auth';

export function LoginForm(props) {
	const onSubmit = (values) => {
        return props.dispatch(login(values.username, values.password));
    }

    let error;
    if (props.error) {
        error = (
            <div className="form-error" aria-live="polite">
                {props.error}
            </div>
        );
    }

	return (
		<div>
			<form 
                onSubmit={props.handleSubmit(values => onSubmit(values))} 
                className="pure-form pure-form-aligned"  >
                <fieldset>
                    <div className="loginError">{error}</div>
                    <legend className="login-register-title"> 
                    	LOGIN
                    </legend>
                    <label htmlFor="username">
                    	Username:
                    </label>
                    <br />
                     <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        validate={[required, nonEmpty]}
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
                        id="password"
                        validate={[required, nonEmpty]}
                    />
                </fieldset>
                <button 
                    className="pure-button pure-input-1-2 pure-button-primary" 
                    disabled={props.pristine || props.submitting} 
                    type="submit">
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

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);