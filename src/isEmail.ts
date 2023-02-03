/**
 * Checks if `value` is a Email address.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a Email address, else `false`.
 * @example
 *
 * isEmail('kecoyo@163.com')
 * // => true
 *
 * isEmail('kecoyo@163')
 * // => false
 *
 */
function isEmail(value: string): boolean {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
}

export default isEmail;
