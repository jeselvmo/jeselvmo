'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/* eslint-disable curly */

var dateUtils = {

	F_DATE: 'yyyyMMdd',
	F_DATE_2: 'yyyy-MM-dd',
	F_TIME: 'HHmmss',
	F_TIME_2: 'HH:mm:ss',
	F_DATETIME: 'yyyyMMddHHmmss',
	F_DATETIME_2: 'yyyy-MM-dd HH:mm:ss',

	format: function format(date) {
		var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dateUtils.F_DATE_2;


		if (typeof date === 'string' || typeof date === 'number') {
			date = new Date(date);
		}

		var o = {
			"M+": date.getMonth() + 1, //月份
			"d+": date.getDate(), //日
			"H+": date.getHours(), //小时
			"m+": date.getMinutes(), //分
			"s+": date.getSeconds(), //秒
			"q+": Math.floor((date.getMonth() + 3) / 3), //季度
			"S+": date.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}return fmt;
	}
};

exports.default = dateUtils;
module.exports = exports['default'];