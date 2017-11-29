/* eslint-disable curly */

const dateUtils = {

	F_DATE: 'yyyyMMdd',
	F_DATE_2: 'yyyy-MM-dd',
	F_TIME: 'HHmmss',
	F_TIME_2: 'HH:mm:ss',
	F_DATETIME: 'yyyyMMddHHmmss',
	F_DATETIME_2: 'yyyy-MM-dd HH:mm:ss',

	format(date, fmt = dateUtils.F_DATE_2) {

		if (typeof date === 'string' || typeof date === 'number') {
			date = new Date(date);
		}

		let o = {
			"M+": date.getMonth() + 1, //月份
			"d+": date.getDate(), //日
			"H+": date.getHours(), //小时
			"m+": date.getMinutes(), //分
			"s+": date.getSeconds(), //秒
			"q+": Math.floor((date.getMonth() + 3) / 3), //季度
			"S+": date.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (let k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}

};

export default dateUtils;
