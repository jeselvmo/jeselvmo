'use strict';

exports.__esModule = true;
var urlUtils = {

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
		return this.getParams()[name];
	},
	getParams: function getParams() {
		var params = {};

		var url = location.href; //获取url中"?"符后的字串
		var match = url.match(/\w+=\w*/g);
		if (match) {
			match.forEach(function (a) {
				var as = a.split('=');
				params[as[0]] = decodeURIComponent(as[1]);
			});
		}
		return params;
	},
	setParams: function setParams(params) {
		var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		var params2 = urlUtils.getParams();

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

exports.default = urlUtils;