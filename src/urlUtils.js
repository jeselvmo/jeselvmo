const urlUtils = {

	/**
	 * 基础URL,无查询参数，无哈希
	 */
	baseUrl: location.origin + location.pathname,

	reload() {
		location.reload()
	},

	repair() {
		// 解决app端
		let url = location.href,
			urls = url.split('?');
		if (urls.length === 3) {
			url = `${urls[0]}?${urls[1]}&${urls[2]}`;
			location.href = url;
		}
	},

	getParam(name) {
		return this.getParams()[name];
	},

	getParams() {
		let params = {};

		let url = location.href; //获取url中"?"符后的字串
		let match = url.match(/\w+=\w*/g);
		if (match) {
			match.forEach((a) => {
				let as = a.split('=');
				params[as[0]] = decodeURIComponent(as[1])
			});
		}
		return params;
	},

	setParams(params, replace = false) {
		let params2 = urlUtils.getParams();

		if (replace) {
			params2 = {}
		}
		Object.keys(params).forEach((key) => {
			params2[key] = params[key];
		});

		location.href = this.baseUrl + '?' + this.toQueryString(params2);
	},

	/**
	 * json转QueryString
	 */
	toQueryString(params) {
		let paramsArray = [];
		Object.keys(params).forEach((key) => {
			paramsArray.push(key + '=' + encodeURIComponent(params[key]))
		});
		return paramsArray.join('&');
	}
};

export default urlUtils
