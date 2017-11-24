/* eslint-disable no-undef */
/**
 * network request
 */
const request = {

	get(url, params) {
		params = params || {};

		console.log('==============================================');
		console.log(`Get:${url}`);
		console.log('Params:', params);

		return new Promise(((resolve, reject) => {
			$.ajax({
				type: 'GET',
				url,
				data: params,
				cache: false,
				dataType: 'json',
				success: (result) => {
					console.log('Result:', result);
					resolve(result);
				},
				error: (XMLHttpRequest, textStatus, errorThrown) => {
					console.log('Error:', XMLHttpRequest, textStatus, errorThrown);
					reject(XMLHttpRequest);
				}
			});
		}));
	},

	post(url, params) {
		params = params || {};

		console.log('==============================================');
		console.log('Post:', url);
		console.log('Data:', params);

		return new Promise((resolve, reject) => {
			$.ajax({
				type: 'POST',
				url,
				data: params,
				cache: false,
				dataType: 'json',
				success: (result) => {
					console.log('Result:', result);
					resolve(result);
				},
				error: (XMLHttpRequest, textStatus, errorThrown) => {
					console.log('Error:', XMLHttpRequest, textStatus, errorThrown);
					reject(XMLHttpRequest);
				}
			});
		});
	}

};

export default request;
