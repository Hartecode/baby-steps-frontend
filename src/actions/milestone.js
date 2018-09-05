import { SERVER_BASE_API } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_PROTECTED_MILESTONE_DATA_SUCCESS = 'FETCH_PROTECTED_MILESTONE_DATA_SUCCESS';
export const fetchProtectedMilestoneDataSuccess = milestoneData => ({
    type: FETCH_PROTECTED_MILESTONE_DATA_SUCCESS,
    milestoneData

});

export const FETCH_PROTECTED_MILESTONE_DATA_ERROR = 'FETCH_PROTECTED_MILESTONE_DATA_ERROR';
export const fetchProtectedMilestoneDataError = error => ({
    type: FETCH_PROTECTED_MILESTONE_DATA_ERROR,
    error
});

// *** fetch milestone data ****
export const fetchProtectedMilestoneData = (data) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const selectedBaby = getState().protectedData.selectedBaby;
    const currentBabyID = data[selectedBaby].id || getState().protectedData.babyData[selectedBaby].id;
    console.log(currentBabyID);
    return fetch(`${SERVER_BASE_API}/api/milestone/${currentBabyID}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => dispatch(fetchProtectedMilestoneDataSuccess(data)))
    .catch(err => dispatch(fetchProtectedMilestoneDataError(err)));
};

