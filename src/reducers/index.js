import * as actions from '../actions';


const initialState = {
	user: {
		id: 'userid',
		username: 'kV',
		firstName: 'Kevin',
		lastName: 'Bacon',
		email: undefined
	},
	babys: [
		{
			id: 'wjbfuwabuab',
			firstName:'Eli',
			middleName: 'Atlis',
			lastName: 'Harte',
			dateOfBirth: '3/22/2017',
			birthCity: 'Long Islaind',
			birthWeight: '7',
			birthLength: '14',
			userID: '784382935783'
		},
		{
			id: 'arwibfauwbfisuab',
			firstName:'Joe',
			middleName: 'Pepe',
			lastName: 'Harte',
			dateOfBirth: '3/2/1998',
			birthCity: 'Long Islaind',
			birthWeight: '7',
			birthLength: '14',
			userID: '784382935783'
		},
		{
			id: 'bfasbdiuassicnks',
			firstName:'Tom',
			middleName: 'Eggs',
			lastName: 'Harte',
			dateOfBirth: '7/2/1998',
			birthCity: 'Long Islaind',
			birthWeight: '7',
			birthLength: '14',
			userID: '784382935783'
		}
	],
	selectedBaby: 0,
	milestones: [
		{
		    id: 'ascsahjjhbsjba',
		    title:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu felis eget sapien bibendum gravida. In feugiat orci velit, eget pretium nisl vestibulum auctor. Etiam vel congue purus, non rutrum lorem. Mauris gravida turpis eget mi vulputate rutrum. ',
		    date: '10/8/86',
		    image: 'https://cdn2.momjunction.com/wp-content/uploads/2015/02/Christian-Baby-Girl-Names-With-Their-Meanings.jpg',
		    babyID: 'ueygduegduebud'
		},
		{
		    id: 'ascsahjjhbsjba',
		    title:  'jhd b d jedeja adja DIHAEDEJHBD',
		    description: 'djhqeh de f er g ewg t gt er g. ewg',
		    date: '10/8/86',
		    image: 'https://cdn2.momjunction.com/wp-content/uploads/2015/02/Christian-Baby-Girl-Names-With-Their-Meanings.jpg',
		    babyID: 'ueygduegduebud'
		},
		{
		    id: 'ascsahjjhbsjba',
		    title:  'jhd b d jedeja adja DIHAEDEJHBD',
		    description: 'djhqeh de f er g ewg t gt er g. ewg',
		    date: '10/8/86',
		    image: 'https://cdn2.momjunction.com/wp-content/uploads/2015/02/Christian-Baby-Girl-Names-With-Their-Meanings.jpg',
		    babyID: 'ueygduegduebud'
		},
		{
		    id: 'ascsahjjhbsjba',
		    title:  'jhd b d jedeja adja DIHAEDEJHBD',
		    description: 'djhqeh de f er g ewg t gt er g. ewg',
		    date: '10/8/86',
		    image: 'https://cdn2.momjunction.com/wp-content/uploads/2015/02/Christian-Baby-Girl-Names-With-Their-Meanings.jpg',
		    babyID: 'ueygduegduebud'
		}

	]

};

export default function Reducer(state = initialState, action) {
	if (action.type === actions.FETCH_LOGIN_USER_SUCCESS) {
		console.log(action.user);
		return Object.assign({}, state, {
	        user: action.user
	    });
	} else if (action.type === actions.CHANGE_SELECTED_BABY) {
	 	const newSelectedBaby = action.selectedBaby;
	 	const babys = state.babys;
	 	//obtain the index number of the selected id
	 	const newIndex = babys.findIndex((obj) => obj.id === newSelectedBaby)
	 	
	    return Object.assign({}, state, {
	        selectedBaby: newIndex
	    });
    }
	return state;
};
