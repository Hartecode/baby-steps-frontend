import {
    FETCH_PROTECTED_BABY_DATA_SUCCESS,
    FETCH_PROTECTED_BABY_DATA_ERROR,
    CHANGE_SELECTED_BABY
} from '../actions/baby';

const initialState = {
    babyData: [],
    milestoneData: [],
    selectedBaby: 0,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_BABY_DATA_SUCCESS) {
        console.log(action.babyData);
        return Object.assign({}, state, {
            babyData: [...action.babyData],
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_BABY_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === CHANGE_SELECTED_BABY) {
        const newSelectedBaby = action.selectedBaby;
        const babys = state.babyData;
        //obtain the index number of the selected id
        const newIndex = babys.findIndex((obj) => obj.id === newSelectedBaby)
        
        return Object.assign({}, state, {
            selectedBaby: newIndex
        });
    }
    return state;
}