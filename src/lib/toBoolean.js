/**
 * 将string类型转换为boolean类型。
 * @param {string} str 要转换字符串
 * @param {boolean} [strict=false] 是否是严格模式
 * @returns {boolean} 转换后的boolean值
 *
 * @example
 *
 * jeselvmo.toBoolean('1');
 * //=> true
 *
 * jeselvmo.toBoolean('true');
 * //=> true
 *
 * jeselvmo.toBoolean('0');
 * //=> false
 *
 * jeselvmo.toBoolean('false')
 * //=> false
 *
 * jeselvmo.toBoolean('2')
 * //=> true
 *
 * jeselvmo.toBoolean('2', true)
 * //=> false
 *
 */
function toBoolean(str, strict) {
  if (typeof str === 'string') {
    if (strict) {
      return str === '1' || str === 'true';
    }
    return str !== '0' && str !== 'false' && str !== '';
  }
  return Boolean(str);
}

export default toBoolean;
