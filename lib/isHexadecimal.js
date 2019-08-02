"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^[0-9A-F]+$/i;
/**
 * 检查字符串是否是十六进制数。
 * @param {string} str - 要检查的字符串。
 * @return {boolean} 真/假
 */

function isHexadecimal(str) {
  (0, _assertString.default)(str);
  return hexadecimal.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;