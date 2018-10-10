import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from '../../input/input';


export function AddBabyForm(props) {
	const onSubmit = (values) => {
        // return props.dispatch(login(values.username, values.password));
    }

	return(
		<section className="babyforminput modal" role="region">
			<form role="form" className="babyfileinput modal-content">
					<fieldset className="row">
						<div className="closebtn"><i className="fas fa-times fa-3x"></i></div>
						<h3>Baby</h3>
						<div className="row">
							<div className="col-4">
								<label for="firstName">First Name:</label>
								<br>
								<input className="babyfirstname" type="text" name="firstName">
							</div>
							<div className="col-4">
								<label for="middleName">Middle Name:</label>
								<br>
								<input className="babymiddlename" type="text" name="middleName">
							</div>
							<div className="col-4">
								<label for="lastName">Last Name:</label>
								<br>
								<input className="babylastname" type="text" name="lastName">
							</div>
						</div>

						<div className="row">
							
							<div className="col-3">
								<label for="dateOfBirth">Date of Birth:</label>
								<br>
								<input className="dateofbirth" type="date" name="dateOfBirth">
							</div>
							<div className="col-3">
								<label for="birthLength">birth length:</label>
								<br>
								<input className="birthlength" type="text" name="birthLength">
							</div>
							<div className="col-3">
								<label for="birthCity">Birth city:</label>
								<br>
								<input className="birthCity" type="text" name="birthCity">
							</div>
							<div className="col-3">
								<label for="birthWeight">birth weight:</label>
								<br>
								<input className="birthweight" type="text" name="birthWeight">
							</div>
						</div>
						

						<div className="">
							<button className="btn posbtn" type="submit">Submit
							</button>
						</div>
						
					</fieldset>
				</form>
		</section>
	)
}

export default reduxForm({
    form: 'baby'
    // onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(AddBabyForm);