"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertString = _interopRequireDefault(require("./util/assertString"));

var _alpha = require("./alpha");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 校验浮点型字符串。
 * @param {string} str - 要验证的字符串。
 * @param {Object} [options] - 选项：
 * @param {number} [options.min] - 最小值。
 * @param {number} [options.max] - 最大值。
 * @param {number} [options.lt] - 小于该值。
 * @param {number} [options.gt] - 大于该值。
 * @returns {boolean} 真/假
 */
function isFloat(str, options) {
  (0, _assertString.default)(str);
  options = options || {};
  var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));

  if (str === '' || str === '.' || str === '-' || str === '+') {
    return false;
  }

  var value = parseFloat(str.replace(',', '.'));
  return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
}

var _default = isFloat;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;