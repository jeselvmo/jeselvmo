"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lengths = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8
};
/**
 * 检查是否是Hash码。
 * @param {string} str - 要检查的字符串。
 * @param {string} algorithm - 类型。
 * @return {boolean} 真/假
 */

function isHash(str, algorithm) {
  (0, _assertString.default)(str);
  var hash = new RegExp("^[a-f0-9]{".concat(lengths[algorithm], "}$"));
  return hash.test(str);
}

var _default = isHash;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;