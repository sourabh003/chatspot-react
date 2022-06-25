import { userLoginAPI } from "../apis/auth";

export const SET_USER = "SET_USER";
export function setUser(data) {
	return (dispatch) => {
		dispatch({ type: SET_USER, payload: data });
	};
}

export const LOGOUT_USER = "LOGOUT_USER";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export function userLogin(data) {
	return (dispatch) => {
		dispatch({ type: USER_LOGIN });
		return new Promise((resolve, reject) => {
			userLoginAPI(data)
				.then((res) => {
					const { message, data } = res;
					dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
					return resolve(message);
				})
				.catch((err) => {
					dispatch({ type: USER_LOGIN_FAILED });
					return reject(err);
				});
		});
	};
}
