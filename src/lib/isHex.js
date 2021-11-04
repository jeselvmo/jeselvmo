import assertString from './util/assertString';

const hexadecimal = /^[0-9A-F]+$/i;

/**
 * 检查字符串是否是十六进制数。
 * @param {string} str - 要检查的字符串
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isHex('1');
 * //=> true
 *
 * jeselvmo.isHex('1F');
 * //=> true
 *
 * jeselvmo.isHex('1A');
 * //=> true
 *
 */
function isHex(str) {
  assertString(str);
  return hexadecimal.test(str);
}

export default isHex;
