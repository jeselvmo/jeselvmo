const userAgent = navigator.userAgent;
const isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1;
const isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

const Platform = {

	/**
	 * 当前平台
	 */
	name: isAndroid ? 'android' : isIOS ? 'ios' : null,

	/**
	 * 是android终端
	 */
	isAndroid,

	/**
	 * 是ios终端
	 */
	isIOS,

}

export default Platform;
