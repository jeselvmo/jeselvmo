"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 将string类型转换为boolean类型。
 * @param {string} str 要转换字符串。
 * @param {boolean} [strict=false] 是否是严格模式。
 * @returns {boolean} 转换后的boolean值。
 *
 * @example
 *
 * jeselvmo.toBoolean('1');
 * //=> true
 *
 * jeselvmo.toBoolean('true');
 * //=> true
 *
 * jeselvmo.toBoolean('0');
 * //=> false
 *
 * jeselvmo.toBoolean('false')
 * //=> false
 *
 * jeselvmo.toBoolean('2')
 * //=> true
 *
 * jeselvmo.toBoolean('2', true)
 * //=> false
 *
 */
function toBoolean(str, strict) {
  (0, _assertString.default)(str);

  if (strict) {
    return str === '1' || str === 'true';
  }

  return str !== '0' && str !== 'false' && str !== '';
}

module.exports = exports.default;
module.exports.default = exports.default;