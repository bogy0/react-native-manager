/**
 * Created by lendvaib on 19/01/17.
 */
/**
 * Created by lendvaib on 19/01/17.
 */
// state = null is for if state is undefine, like in the initial state,
// then state should be null not undefined,
// coz if the state is undefined redux will throw error
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			// updates state.email with action.payload
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			// updates state.email with action.payload
			return { ...state, password: action.payload };
		default:
			return state;
	}
};

