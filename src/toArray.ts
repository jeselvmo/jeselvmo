import _toArray from 'lodash/toArray';

/**
 * Converts `value` to an array.
 *
 * @since 2.1.0
 * @category Array
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * toArray(1);
 * // => []
 *
 * toArray(null);
 * // => []
 */
function toArray<T>(value: T): Array<T[keyof T]> {
  return _toArray(value);
}

export default toArray;
