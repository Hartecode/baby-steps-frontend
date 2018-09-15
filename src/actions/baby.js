 
import { SERVER_BASE_API } from '../config';
import { normalizeResponseErrors } from './utils';
import { fetchProtectedMilestoneData } from './milestone';

export const FETCH_PROTECTED_BABY_DATA_SUCCESS = 'FETCH_PROTECTED_BABY_DATA_SUCCESS';
export const fetchProtectedBabyDataSuccess = babyData => ({
    type: FETCH_PROTECTED_BABY_DATA_SUCCESS,
    babyData

});

export const FETCH_PROTECTED_BABY_DATA_ERROR = 'FETCH_PROTECTED_BABY_DATA_ERROR';
export const fetchProtectedBabyDataError = error => ({
    type: FETCH_PROTECTED_BABY_DATA_ERROR,
    error
});

export const fetchProtectedBabyData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const userID = getState().auth.currentUser.id;
    return fetch(`${SERVER_BASE_API}/api/baby/${userID}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => {
        dispatch(fetchProtectedMilestoneData(data[0].id));
        dispatch(fetchProtectedBabyDataSuccess(data));
    })
    .catch(err => dispatch(fetchProtectedBabyDataError(err)));
};

// *** change selected Baby *** ///
export const CHANGE_SELECTED_BABY = 'CHANGE_SELECTED_BABY';
export const changeSelectedBaby = selectedBaby => ({
    type: CHANGE_SELECTED_BABY,
    selectedBaby
});
