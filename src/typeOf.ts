/**
 * Gets the type of `value`.
 *
 * @since 2.1.0
 * @category Lang
 * @param {*} value The value to get type.
 * @returns {string} Returns the type of value.
 * @example
 *
 * typeOf('abc')
 * // => 'String'
 *
 * typeOf(1)
 * // => 'Number'
 *
 * typeOf(true)
 * // => 'Boolean'
 *
 * typeOf(new Date())
 * // => 'Date'
 *
 * typeOf(null)
 * // => 'Null'
 *
 * typeOf(undefined)
 * // => 'Undefined'
 *
 * typeOf(new Error())
 * // => 'Error'
 *
 */
function typeOf(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1);
}

export default typeOf;
