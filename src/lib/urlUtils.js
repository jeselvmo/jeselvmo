const urlUtils = {

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
		let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
		let r = window.location.search.substr(1).match(reg);
		if (r !== null) {
			return unescape(r[2]);
		}
		return null;
	},

	getParams() {
		let url = location.search; //获取url中"?"符后的字串
		let params = {};
		if (url.indexOf("?") !== -1) {
			let str = url.substr(1);
			let strs = str.split("&");
			for (let i = 0; i < strs.length; i++) {
				params[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
			}
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
