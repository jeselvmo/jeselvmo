/**
 * 字符串转为base64。
 * @param {string} str 转码前字符串。
 * @returns {string} 转码后字符串。
 *
 * @example
 *
 * jeselvmo.stringToBase64('杨可可');
 * //=> '5p2o5Y+v5Y+v'
 *
 */
function stringToBase64(str) {
  return new Buffer.from(str).toString('base64');
}

export default stringToBase64;
