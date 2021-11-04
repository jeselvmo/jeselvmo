import assertString from './util/assertString';

const notBase64 = /[^A-Z0-9+\/=]/i;

/**
 * 检查是否是Base64。
 * @param {string} str - 要检查的字符串
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isBase64('ZmFzZGZhc2Rm');
 * //=> true
 *
 * jeselvmo.isBase64('Y2FzZGFzZA==');
 * //=> true
 *
 */
function isBase64(str) {
  assertString(str);
  const len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  const firstPaddingChar = str.indexOf('=');
  return (
    firstPaddingChar === -1 || firstPaddingChar === len - 1 || (firstPaddingChar === len - 2 && str[len - 1] === '=')
  );
}

export default isBase64;
