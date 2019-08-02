"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

/**
 * 检查是否是boolean类型。
 * @param {string} str - 要检查的字符串。
 * @return {boolean} 真/假
 */
function isBoolean(str) {
  return ['true', 'false', '1', '0', true, false, 1, 0].indexOf(str) >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;