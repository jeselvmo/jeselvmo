import assertString from './util/assertString';

/**
 * 检查白名单字符串。
 * @param {string} str -
 * @param {string} chars -
 */
export default function isWhitelisted(str, chars) {
  assertString(str);
  for (let i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}
