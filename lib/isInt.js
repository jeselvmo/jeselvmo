"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 校验整型字符串。
 * @param {string} str - 要验证的字符串。
 * @param {Object} [options] - 选项：
 * @param {number} [options.min] - 最小值，包含当前值。
 * @param {number} [options.max] - 最大值，包含当前值。
 * @param {number} [options.lt] - 小于该值。
 * @param {number} [options.gt] - 大于该值。
 * @returns {boolean} 真/假
 */
function isInt(str, options) {
  options = options || {};

  if (typeof str !== 'string') {
    str += '';
  }

  var regex = /^[-+]?[0-9]+$/; // Check min/max/lt/gt

  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;
  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}

module.exports = exports.default;
module.exports.default = exports.default;