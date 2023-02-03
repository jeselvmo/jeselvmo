import _toNumber from 'lodash/toNumber';

/**
 * Converts `value` to a number.
 *
 * @since 3.0.0
 * @category Number
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * toNumber(3.2);
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * toNumber(Infinity);
 * // => Infinity
 *
 * toNumber('3.2');
 * // => 3.2
 */
function toNumber(value: any): number {
  return _toNumber(value);
}

export default toNumber;
