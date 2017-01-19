/**
 * Created by lendvaib on 19/01/17.
 */
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
	auth: AuthReducer
});
