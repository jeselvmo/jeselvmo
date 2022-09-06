/**
 * base64转字符串。
 * @param {string} str 解码前的字符串。
 * @returns {string} 解码后的字符串。
 *
 * @example
 *
 * jeselvmo.base64ToString('5p2o5Y+v5Y+v');
 * //=> '杨可可'
 *
 */
function base64ToString(str) {
  return new Buffer.from(str, 'base64').toString();
}

export default base64ToString;
