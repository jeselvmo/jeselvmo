import _toInteger from 'lodash/toInteger';

/**
 * Converts `value` to an integer.
 *
 * @since 2.1.0
 * @category Number
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * toInteger(3.2);
 * // => 3
 *
 * toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2');
 * // => 3
 */
function toInteger(value: any): number {
  return _toInteger(value);
}

export default toInteger;
