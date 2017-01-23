/**
 * Created by lendvaib on 23/01/17.
 */
import {
	EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};


export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_UPDATE:
			// action.payload === { prop: 'name', value: 'jane' }
			// ES6 key interpolation: [action.payload.prop]
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
};
