"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
var numericNoSymbols = /^[0-9]+$/;
/**
 * 检查是否是数字型
 * @param {string} str - 要检查的字符串。
 * @param {Object} [options] - options is an object which defaults to {no_symbols: false}.
 * @param {boolean} [options.no_symbols=false] - the validator will reject numeric strings that feature a symbol (e.g. +, -, or .).
 * @return {boolean} 真/假
 */

function isNumeric(str, options) {
  (0, _assertString.default)(str);

  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }

  return numeric.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;