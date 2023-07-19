/**
 * Checks if `value` is a primitive type.
 *
 * @since 2.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a primitive type, else `false`.
 * @example
 *
 * isPrimitive('')
 * // => true
 *
 * isPrimitive(1)
 * // => true
 *
 * isPrimitive(false)
 * // => true
 *
 * isPrimitive(null)
 * // => true
 *
 * isPrimitive(undefined)
 * // => true
 *
 */
function isPrimitive(value: any) {
  return (
    typeof value === 'boolean' ||
    typeof value === 'number' ||
    typeof value === 'string' ||
    typeof value === 'symbol' ||
    value === null ||
    value === undefined
  );
}

export default isPrimitive;
