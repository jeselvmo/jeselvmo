"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertString = _interopRequireDefault(require("./util/assertString"));

var _toDate = _interopRequireDefault(require("./toDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 验证日期之前
 * @param {string} str -
 * @param {string} date -
 * @returns {boolean}
 */
function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
  (0, _assertString.default)(str);
  var comparison = (0, _toDate.default)(date);
  var original = (0, _toDate.default)(str);
  return !!(original && comparison && original < comparison);
}

var _default = isBefore;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;