'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var URLUtils = {

	href: location.href,
	hash: location.hash,
	host: location.host,
	hostname: location.hostname,
	origin: location.origin,
	pathname: location.pathname,
	port: location.port,
	protocol: location.protocol,
	search: location.search,

	/**
  * 基础URL,无查询参数，无哈希
  */
	baseUrl: location.origin + location.pathname,

	reload: function reload() {
		location.reload();
	},
	repair: function repair() {
		// 解决app端
		var url = location.href,
		    urls = url.split('?');
		if (urls.length === 3) {
			url = urls[0] + '?' + urls[1] + '&' + urls[2];
			location.href = url;
		}
	},
	getParam: function getParam(name) {
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		var r = window.location.search.substr(1).match(reg);
		if (r !== null) {
			return unescape(r[2]);
		}
		return null;
	},
	getParams: function getParams() {
		var url = location.search; //获取url中"?"符后的字串
		var params = {};
		if (url.indexOf("?") !== -1) {
			var str = url.substr(1);
			var strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				params[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
			}
		}
		return params;
	},
	setParams: function setParams(params) {
		var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		var params2 = URLUtils.getParams();

		if (replace) {
			params2 = {};
		}
		Object.keys(params).forEach(function (key) {
			params2[key] = params[key];
		});

		location.href = this.baseUrl + '?' + this.toQueryString(params2);
	},


	/**
  * json转QueryString
  */
	toQueryString: function toQueryString(params) {
		var paramsArray = [];
		Object.keys(params).forEach(function (key) {
			paramsArray.push(key + '=' + encodeURIComponent(params[key]));
		});
		return paramsArray.join('&');
	}
};

exports.default = URLUtils;
module.exports = exports['default'];