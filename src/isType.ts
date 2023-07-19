import typeOf from './typeOf';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * @since 2.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @param {string} type The type of value to check.
 * @returns {boolean} Returns `true` if `value` is a `type`, else `false`.
 * @example
 *
 * isType([1, 2, 3], 'Array');
 * // => true
 *
 * isType('abc', 'String');
 * // => true
 *
 * isType(_.noop, 'Function');
 * // => true
 *
 */
function isType(value: any, type: string): boolean {
  return typeOf(value) === type;
}

export default isType;
