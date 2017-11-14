'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Request = {
	get: function get(url, params) {
		params = params || {};

		console.log('==============================================');
		console.log('Get:' + url);
		console.log('Params:', params);

		return new Promise(function (resolve, reject) {
			_axios2.default.get(url, {
				params: params
			}).then(function (response) {
				console.log('Respons:', response);
				console.log('Result:', response.data);
				resolve(response.data);
			}).catch(function (error) {
				console.log('Error:', error);
				reject(error);
			});
		});
	},
	post: function post(url, params) {
		params = params || {};

		console.log('==============================================');
		console.log('Post:', url);
		console.log('Data:', params);

		return new Promise(function (resolve, reject) {
			_axios2.default.post(url, params).then(function (response) {
				console.log('Respons:', response);
				console.log('Result:', response.data);
				resolve(response.data);
			}).catch(function (error) {
				console.log('Error:', error);
				reject(error);
			});
		});
	}
}; /**
    * network request
    */

exports.default = Request;
module.exports = exports['default'];