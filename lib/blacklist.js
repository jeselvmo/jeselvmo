"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @desc 删除在黑名单中出现的字符。
 * @param {string} str 需要处理的字符串。
 * @param {string} chars 黑名单字符，可以使用RegExp，需要转义的字符，例如白名单(输入'\\[\\])。
 * @returns {string} 返回处理后的字符串。
 *
 * @example
 *
 * jeselvmo.blacklist('abcd123abcd123', 'abcd');
 * //=> "123123"
 *
 */
function blacklist(str, chars) {
  (0, _assertString.default)(str);
  return str.replace(new RegExp("[".concat(chars, "]+"), 'g'), '');
}

module.exports = exports.default;
module.exports.default = exports.default;