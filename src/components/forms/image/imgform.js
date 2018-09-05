import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { required, nonEmpty } from '../../../validators';
import Input from '../input/input';
// import { login } from '../../../actions/auth';

export function ImgForm(props) {
	const onSubmit = (values) => {
        console.log(values);
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
                    {error}
                    <label htmlFor="imageUpload">
                    	Upload photo:
                    </label>
                    <br />
                    <Field
                        component={Input}
                        type="filed"
                        name="imageUpload"
                        id="imageUpload"
                        accept="image/png, image/jpeg, image/jpg, image/gif"
                        validate={[required, nonEmpty]}
                    />
                </fieldset>
                <button 
                    className="pure-button pure-button-primary" 
                    disabled={props.pristine || props.submitting} 
                    type="submit">
                    Submit
                </button>
            </form>
		</div>
	)
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(ImgForm);