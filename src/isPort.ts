/**
 * Checks if `value` is a Port number.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a Port number, else `false`.
 * @example
 *
 * isPort(0)
 * // => true
 *
 * isPort(65535)
 * // => true
 *
 * isPort(65536)
 * // => false
 *
 * isPort(-65536)
 * // => false
 *
 */
function isPort(value: string | number): boolean {
  if (typeof value === 'string') {
    value = parseInt(value);
  }
  return value > 0 && value <= 65535;
}

export default isPort;
