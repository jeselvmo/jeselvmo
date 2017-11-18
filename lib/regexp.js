"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * 正则表达式的几种用法
 */
var regexp = {
	test: function test(str, reg) {
		return reg.test(str);
	},
	search: function search(str, reg) {
		return str.search(reg);
	},
	match: function match(str, reg) {
		return str.match(reg);
	},
	split: function split(str, reg) {
		return str.split(reg);
	},
	replace: function replace(str, reg, rep) {
		return str.replace(reg, rep);
	}
};

exports.default = regexp;
module.exports = exports["default"];