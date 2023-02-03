/**
 * Get the actual length of Chinese and English strings.
 *
 * @since 3.0.0
 * @category String
 * @param  {string} string The string to get.
 * @returns {number} Return the actual length of string.
 * @example
 *
 * strLength('中国')
 * // => 4
 *
 */
function strLength(string: string): number {
  let length = 0;
  Array.from(string).map(function (char) {
    if (char.charCodeAt(0) > 255) {
      length += 2; //字符编码大于255，说明是双字节字符
    } else {
      length++;
    }
  });
  return length;
}

export default strLength;
