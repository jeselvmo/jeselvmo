const hexadecimal = /^[0-9A-F]+$/i;

/**
 * Checks if `value` is a Hexadecimal number.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a Hexadecimal number, else `false`.
 * @example
 *
 * isHex('1')
 * // => true
 *
 * isHex('1F')
 * // => true
 *
 * isHex('1A')
 * // => true
 *
 */
function isHex(value: string): boolean {
  return hexadecimal.test(value);
}

export default isHex;
