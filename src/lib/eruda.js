/* eslint-disable no-undef */
import environment from './environment';

environment.name === 'development' &&
(function () {
	var script = document.createElement('script');
	script.src = "http://cdn.bootcss.com/eruda/1.2.4/eruda.min.js";
	document.body.appendChild(script);
	script.onload = function () {
		eruda.init()
	}
})()
