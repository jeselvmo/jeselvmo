import _isEmpty from 'lodash/isEmpty';

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * @since 2.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 *
 */
function isEmpty(value?: any): boolean {
  return _isEmpty(value);
}

export default isEmpty;
