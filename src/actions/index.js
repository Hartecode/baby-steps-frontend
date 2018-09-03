import { SERVER_BASE_API } from '../config';



// *** fetch the signed in user ***
export const fetchPostLogin = (data) => dispatch => {
    fetch(`${SERVER_BASE_API}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then( json => {
    	console.log(json);
    	//the jwt is stored in browser
        window.sessionStorage.accessToken = json.authToken;
        // localStorage.setItem('token', json.authToken);
        //the user Id is stored on to the browser
        localStorage.setItem('userId', json.userId);

        // window.location = '/dashboard';
    });
}; 

// *** fetch user info*** 
export const FETCH_LOGIN_USER_SUCCESS = 'FETCH_LOGIN_USER_SUCCESS';
export const fetchLoginUserSuccess = user => ({
	type: FETCH_LOGIN_USER_SUCCESS,
	user
});

export const fetchLoginUser = (id) => dispatch => {
	fetch((`${SERVER_BASE_API}/api/users/${id}`))
	.then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then( data => {
    	window.location = '/dashboard'
        dispatch(fetchLoginUserSuccess(data));
    });
}

// *** change selected Baby *** ///
export const CHANGE_SELECTED_BABY = 'CHANGE_SELECTED_BABY';
export const changeSelectedBaby = selectedBaby => ({
	type: CHANGE_SELECTED_BABY,
	selectedBaby
});
