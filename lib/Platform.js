'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var userAgent = navigator.userAgent;
var isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1;
var isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

var Platform = {

	/**
  * 当前平台
  */
	name: isAndroid ? 'android' : isIOS ? 'ios' : null,

	/**
  * 是android终端
  */
	isAndroid: isAndroid,

	/**
  * 是ios终端
  */
	isIOS: isIOS

};

exports.default = Platform;
module.exports = exports['default'];