import assertString from './util/assertString';

/**
 * 获取中英文字符串的实际长度。
 * @param  {string} str 字符串
 * @returns {number} 返回字符串长度。
 *
 * @example
 *
 * jeselvmo.strLength('中国');
 * //=> 4
 *
 */
function strLength(str) {
  assertString(str);
  let length = 0;
  Array.from(str).map(function (char) {
    if (char.charCodeAt(0) > 255) {
      length += 2; //字符编码大于255，说明是双字节字符
    } else {
      length++;
    }
  });
  return length;
}

export default strLength;
