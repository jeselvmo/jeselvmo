/**
 * Convert to base64 string.
 *
 * @since 2.1.0
 * @category String
 * @param {string} string The string to convert.
 * @returns {string} Returns the converted base64 string.
 * @example
 *
 * stringToBase64('杨可可')
 * // => '5p2o5Y+v5Y+v'
 *
 */
function stringToBase64(string: string): string {
  const encode = encodeURI(string);
  const base64 = btoa(encode);
  return base64;
}

export default stringToBase64;
