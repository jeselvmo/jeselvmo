"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

var default_is_empty_options = {
  ignore_whitespace: false
};
/**
 * 判断是否为空字符串
 * @param  {string}  str 检验字符串。
 * @param  {Object}  [options] 选项：
 * @param  {boolean}  [options.ignore_whitespace=true] 选项：
 * @returns {boolean} 真/假
 */

function isEmpty(str, options) {
  (0, _assertString.default)(str);
  options = merge(options, default_is_empty_options);
  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;