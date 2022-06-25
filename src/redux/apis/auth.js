import { apiPost } from "../../utils/methods";

export const userLoginAPI = (data) => {
	return apiPost("/users/login", data);
};
