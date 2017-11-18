'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = {
	get: function get(url, params) {
		params = params || {};

		console.log('==============================================');
		console.log('Get:' + url);
		console.log('Params:', params);

		return new Promise(function (resolve, reject) {
			_jquery2.default.ajax({
				type: 'GET',
				url: url,
				data: params,
				cache: false,
				dataType: 'json',
				success: function success(result) {
					console.log('Result:', result);
					resolve(result);
				},
				error: function error(XMLHttpRequest, textStatus, errorThrown) {
					console.log('Error:', XMLHttpRequest, textStatus, errorThrown);
					reject(XMLHttpRequest);
				}
			});
		});
	},
	post: function post(url, params) {
		params = params || {};

		console.log('==============================================');
		console.log('Post:', url);
		console.log('Data:', params);

		return new Promise(function (resolve, reject) {
			_jquery2.default.ajax({
				type: 'POST',
				url: url,
				data: params,
				cache: false,
				dataType: 'json',
				success: function success(result) {
					console.log('Result:', result);
					resolve(result);
				},
				error: function error(XMLHttpRequest, textStatus, errorThrown) {
					console.log('Error:', XMLHttpRequest, textStatus, errorThrown);
					reject(XMLHttpRequest);
				}
			});
		});
	}
}; /**
    * network request
    */
exports.default = request;
module.exports = exports['default'];