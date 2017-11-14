"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
var isFirefox = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1; //判断是否Safari浏览器
var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

//判断当前浏览类型
function browserType() {
	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion === 7) {
			return "IE7";
		} else if (fIEVersion === 8) {
			return "IE8";
		} else if (fIEVersion === 9) {
			return "IE9";
		} else if (fIEVersion === 10) {
			return "IE10";
		} else if (fIEVersion === 11) {
			return "IE11";
		}
		//IE版本过低
		return "0";
	}

	if (isFirefox) {
		return "Firefox";
	}
	if (isOpera) {
		return "Opera";
	}
	if (isSafari) {
		return "Safari";
	}
	if (isChrome) {
		return "Chrome";
	}
	if (isEdge) {
		return "Edge";
	}
	//未知浏览器
	return null;
}

var Browser = {
	name: browserType(),

	isOpera: isOpera,
	isIE: isIE,
	isEdge: isEdge,
	isFirefox: isFirefox,
	isSafari: isSafari,
	isChrome: isChrome
};

exports.default = Browser;
module.exports = exports["default"];