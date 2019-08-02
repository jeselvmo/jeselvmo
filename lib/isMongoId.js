"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertString = _interopRequireDefault(require("./util/assertString"));

var _isHexadecimal = _interopRequireDefault(require("./isHexadecimal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 检查是不是Mongo ID。
 * @param {string} str - 要检查的字符串。
 * @return {boolean} 真/假
 */
function isMongoId(str) {
  (0, _assertString.default)(str);
  return (0, _isHexadecimal.default)(str) && str.length === 24;
}

var _default = isMongoId;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;