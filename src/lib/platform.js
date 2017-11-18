const u = navigator.userAgent; //取得浏览器的userAgent字符串
const p = navigator.platform; // 取得平台字符串

const isOpera = u.indexOf("Opera") > -1; //判断是否Opera浏览器
const isIE = u.indexOf("compatible") > -1 && u.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
const isEdge = u.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
const isFirefox = u.indexOf("Firefox") > -1; //判断是否Firefox浏览器
const isSafari = u.indexOf("Safari") > -1 && u.indexOf("Chrome") === -1; //判断是否Safari浏览器
const isChrome = u.indexOf("Chrome") > -1 && u.indexOf("Safari") > -1; //判断Chrome浏览器

const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

const isIPhone = u.indexOf('iPhone') > -1;
const isIPad = u.indexOf('iPad') > -1;
const isIPod = u.indexOf('iPod') > -1;
const isWindowsPhone = u.indexOf('Windows Phone') > -1;
const isSymbianOS = u.indexOf('SymbianOS') > -1;

const isWeiXin = u.toLowerCase().indexOf('micromessenger') !== -1;	//是否在微信中打开
const isQQ = u.match(/\sQQ/i) === " qq"; //是否QQ

const IsPC = !(isAndroid || isIPhone || isIPad || isIPod || isSymbianOS || isWindowsPhone);

const isTrident = u.indexOf('Trident') > -1; //IE内核
const isPresto = u.indexOf('Presto') > -1; //opera内核
const isWebKit = u.indexOf('AppleWebKit') > -1; //苹果、谷歌内核
const isGecko = u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1;//火狐内核
const isMobile = !!u.match(/AppleWebKit.*Mobile.*/); //是否为移动终端

const isWebApp = u.indexOf('Safari') === -1; //是否web应该程序，没有头部与底部


const isWin = (p === "Win32") || (p === "Windows");
const isMac = (p === "Mac68K") || (p === "MacPPC") || (p === "Macintosh") || (p === "MacIntel");
const isLinux = p.indexOf("Linux") > -1;

const name = (() => {
	if (isAndroid) {
		return 'android'
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
})();

const browser = (() => {
	if (isIE) {
		let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(u);
		let fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion === 7) {
			return "IE7";
		}
		else if (fIEVersion === 8) {
			return "IE8";
		}
		else if (fIEVersion === 9) {
			return "IE9";
		}
		else if (fIEVersion === 10) {
			return "IE10";
		}
		else if (fIEVersion === 11) {
			return "IE11";
		}
		//IE版本过低
		return "0"
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
	return null
})();


const platform = {

	isOpera,
	isIE,
	isEdge,
	isFirefox,
	isSafari,
	isChrome,

	isAndroid,
	isIOS,

	isIPhone,
	isIPad,
	isIPod,
	isWindowsPhone,
	isSymbianOS,

	IsPC,

	isWeiXin,
	isQQ,

	isWebApp,

	isTrident,
	isPresto,
	isWebKit,
	isGecko,
	isMobile,

	isWin,
	isMac,
	isLinux,

	name,

	browser,
};

export default platform
