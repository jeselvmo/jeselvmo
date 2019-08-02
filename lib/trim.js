"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = _interopRequireDefault(require("./rtrim"));

var _ltrim = _interopRequireDefault(require("./ltrim"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 移除字符串两侧的空白字符或其他预定义字符。
 * @param {string} str 必需。规定要检查的字符串。
 * @param {string} chars 可选。规定从字符串中删除哪些字符。如果被省略，则移除所有空白字符。
 */
function trim(str, chars) {
  return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
}

module.exports = exports.default;
module.exports.default = exports.default;