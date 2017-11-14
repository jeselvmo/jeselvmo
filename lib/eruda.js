"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var script = document.createElement('script');
	script.src = "http://cdn.bootcss.com/eruda/1.2.4/eruda.min.js";
	document.body.appendChild(script);
	script.onload = function () {
		eruda.init();
	};
};

module.exports = exports["default"]; /* eslint-disable no-undef */