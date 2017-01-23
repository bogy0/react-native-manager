/**
 * Created by lendvaib on 19/01/17.
 */
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
	auth: AuthReducer,
	emplofyeeForm: EmployeeFormReducer
});
