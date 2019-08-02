"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 判断是否为邮箱地址
 * @param  {string}  str 检验字符串。
 * @returns {boolean} 真/假
 */
function isEmail(str) {
  (0, _assertString.default)(str);
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;