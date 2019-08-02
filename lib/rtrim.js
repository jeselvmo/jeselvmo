"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 移除字符串右侧的空白字符或其他预定义字符。
 * @param {string} str 必需。规定要检查的字符串。
 * @param {string} chars 可选。规定从字符串中删除哪些字符。如果被省略，则移除所有空白字符。
 * @returns {string} 返回移除后的字符串。
 */
function rtrim(str, chars) {
  (0, _assertString.default)(str);
  var pattern = chars ? new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+$"), 'g') : /\s+$/g;
  return str.replace(pattern, '');
}

module.exports = exports.default;
module.exports.default = exports.default;