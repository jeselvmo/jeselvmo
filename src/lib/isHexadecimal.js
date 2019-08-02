import assertString from './util/assertString';

const hexadecimal = /^[0-9A-F]+$/i;

/**
 * 检查字符串是否是十六进制数。
 * @param {string} str - 要检查的字符串。
 * @return {boolean} 真/假
 */
export default function isHexadecimal(str) {
  assertString(str);
  return hexadecimal.test(str);
}
