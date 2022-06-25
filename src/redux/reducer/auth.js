import { LOCAL_USER } from "../../utils/constants";
import { setData } from "../../utils/methods";
import * as authActions from "../actions/auth";

const initialState = {
	isLoggedIn: false,
	user: null,
};

const authReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case authActions.SET_USER:
			return { ...state, user: payload, isLoggedIn: true };

		case authActions.LOGOUT_USER:
			return { ...state, user: null, isLoggedIn: false };

		case authActions.USER_LOGIN_SUCCESS:
			setData(LOCAL_USER, payload);
			return { ...state, user: payload, isLoggedIn: true };

		default:
			return { ...state };
	}
};

export default authReducer;
