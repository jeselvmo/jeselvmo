"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var u = navigator.userAgent; //取得浏览器的userAgent字符串
var p = navigator.platform; // 取得平台字符串

var isOpera = u.indexOf("Opera") > -1; //判断是否Opera浏览器
var isIE = u.indexOf("compatible") > -1 && u.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
var isEdge = u.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
var isFirefox = u.indexOf("Firefox") > -1; //判断是否Firefox浏览器
var isSafari = u.indexOf("Safari") > -1 && u.indexOf("Chrome") === -1; //判断是否Safari浏览器
var isChrome = u.indexOf("Chrome") > -1 && u.indexOf("Safari") > -1; //判断Chrome浏览器

var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

var isIPhone = u.indexOf('iPhone') > -1;
var isIPad = u.indexOf('iPad') > -1;
var isIPod = u.indexOf('iPod') > -1;
var isWindowsPhone = u.indexOf('Windows Phone') > -1;
var isSymbianOS = u.indexOf('SymbianOS') > -1;

var isWeiXin = u.toLowerCase().indexOf('micromessenger') !== -1; //是否在微信中打开
var isQQ = u.match(/\sQQ/i) === " qq"; //是否QQ

var IsPC = !(isAndroid || isIPhone || isIPad || isIPod || isSymbianOS || isWindowsPhone);

var isTrident = u.indexOf('Trident') > -1; //IE内核
var isPresto = u.indexOf('Presto') > -1; //opera内核
var isWebKit = u.indexOf('AppleWebKit') > -1; //苹果、谷歌内核
var isGecko = u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1; //火狐内核
var isMobile = !!u.match(/AppleWebKit.*Mobile.*/); //是否为移动终端

var isWebApp = u.indexOf('Safari') === -1; //是否web应该程序，没有头部与底部


var isWin = p === "Win32" || p === "Windows";
var isMac = p === "Mac68K" || p === "MacPPC" || p === "Macintosh" || p === "MacIntel";
var isLinux = p.indexOf("Linux") > -1;

var name = function () {
	if (isAndroid) {
		return 'android';
	} else if (isIOS) {
		return "ios";
	} else if (isLinux) {
		return "linux";
	} else if (isWin) {
		return "windows";
	} else if (isMac) {
		return "mac";
	}
	return "unknown";
}();

var browser = function () {
	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(u);
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
}();

var platform = {

	isOpera: isOpera,
	isIE: isIE,
	isEdge: isEdge,
	isFirefox: isFirefox,
	isSafari: isSafari,
	isChrome: isChrome,

	isAndroid: isAndroid,
	isIOS: isIOS,

	isIPhone: isIPhone,
	isIPad: isIPad,
	isIPod: isIPod,
	isWindowsPhone: isWindowsPhone,
	isSymbianOS: isSymbianOS,

	IsPC: IsPC,

	isWeiXin: isWeiXin,
	isQQ: isQQ,

	isWebApp: isWebApp,

	isTrident: isTrident,
	isPresto: isPresto,
	isWebKit: isWebKit,
	isGecko: isGecko,
	isMobile: isMobile,

	isWin: isWin,
	isMac: isMac,
	isLinux: isLinux,

	name: name,

	browser: browser
};

exports.default = platform;
module.exports = exports["default"];