/* eslint-disable no-undef */
export default function () {
	let script = document.createElement('script');
	script.src = "http://cdn.bootcss.com/eruda/1.2.4/eruda.min.js";
	document.body.appendChild(script);
	script.onload = function () {
		eruda.init();
	}
}
