import assertString from './util/assertString';

const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

/**
 * 检查是否是Hex Color。
 * @param {string} str - 要检查的字符串。
 * @return {boolean} 真/假
 */
export default function isHexColor(str) {
  assertString(str);
  return hexcolor.test(str);
}
