/**
 * Convert to original string from base64 string.
 *
 * @since 2.1.0
 * @category String
 * @param {string} string The string to convert.
 * @returns {string} Returns the original string.
 * @example
 *
 * base64ToString('5p2o5Y+v5Y+v')
 * // => '杨可可'
 *
 */
function base64ToString(base64: string) {
  const decode = atob(base64); // 对base64转编码
  const string = decodeURI(decode); // 编码转字符串
  return string;
}

export default base64ToString;
