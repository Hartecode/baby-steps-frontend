import {
    FETCH_PROTECTED_MILESTONE_DATA_SUCCESS,
    FETCH_PROTECTED_MILESTONE_DATA_ERROR,
    MILE_REQUEST
} from '../actions/milestone';

const initialState = {
    milestoneData: null,
    loading: true,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === MILE_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_MILESTONE_DATA_SUCCESS) {
        console.log(action.milestoneData);
        return Object.assign({}, state, {
            milestoneData: [...action.milestoneData],
            loading: false,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_MILESTONE_DATA_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}