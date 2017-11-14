/**
 * network request
 */

import axios from 'axios';

const Request = {

	get(url, params) {
		params = params || {};

		console.log('==============================================');
		console.log(`Get:${url}`);
		console.log('Params:', params);

		return new Promise(((resolve, reject) => {
			axios.get(url, {
				params,
			})
				.then((response) => {
					console.log('Respons:', response);
					console.log('Result:', response.data);
					resolve(response.data);
				})
				.catch((error) => {
					console.log('Error:', error);
					reject(error);
				});
		}));
	},

	post(url, params) {
		params = params || {};

		console.log('==============================================');
		console.log('Post:', url);
		console.log('Data:', params);

		return new Promise((resolve, reject) => {
			axios.post(url, params)
				.then((response) => {
					console.log('Respons:', response);
					console.log('Result:', response.data);
					resolve(response.data);
				})
				.catch((error) => {
					console.log('Error:', error);
					reject(error);
				});
		});
	}

};

export default Request;
