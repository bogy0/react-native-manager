/**
 * Created by lendvaib on 19/01/17.
 */
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};