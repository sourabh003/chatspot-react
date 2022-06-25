import { API_BASE_URL } from "./constants";
import axios from "axios";

export const getData = (key) => {
	let item = JSON.parse(localStorage.getItem(key));
	if (item) return item;
	return null;
};

export const setData = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const removeData = (key) => {
	localStorage.removeItem(key);
};

export const generateURL = (url) => {
	return API_BASE_URL + url;
};

export const request = (url, data, method) => {
	return new Promise((resolve, reject) => {
		axios({
			method,
			url,
			data,
		})
			.then((res) => {
				const { status, data } = res;
				if (status === 200) {
					console.log(data.data);
					return resolve(data);
				}
				return reject(data.message);
			})
			.catch((err) => {
				console.log(err);
				if (err && err.response) {
					if (err.response && err.response.data) {
						return reject(err.response.data.error);
					}
					return reject(err.response.statusText);
				}
				return reject(err);
			});
	});
};

export const apiPost = (url, data) => {
	return request(generateURL(url), data, "post");
};
