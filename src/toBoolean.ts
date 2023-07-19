/**
 * Converts `value` to a boolean.
 *
 * @since 2.1.0
 * @category Boolean
 * @param {*} value The value to convert.
 * @param {boolean} [strict] Is strict mode.
 * @returns {Array} Returns the converted boolean.
 * @example
 *
 * toBoolean('1')
 * // => true
 *
 * toBoolean('true')
 * // => true
 *
 * toBoolean('0')
 * // => false
 *
 * toBoolean('false')
 * // => false
 *
 * toBoolean('2')
 * // => true
 *
 * toBoolean('2', true)
 * // => false
 *
 */
function toBoolean(value: any, strict?: boolean): boolean {
  if (typeof value === 'string') {
    if (strict) {
      return value === '1' || value === 'true';
    }
    return value !== '0' && value !== 'false' && value !== '';
  }
  return Boolean(value);
}

export default toBoolean;
