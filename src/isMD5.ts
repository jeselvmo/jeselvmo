const md5 = /^[a-fA-F0-9]{32}$/;

/**
 * Checks if `value` is a MD5 string.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a MD5 string, else `false`.
 * @example
 *
 * isMD5('E10ADC3949BA59ABBE56E057F20F883E')
 * // => true
 *
 * isMD5('d0ea9bcd2d343c21e805b25f2b1a27ee')
 * // => true
 *
 * isMD5('2D343C21E805B25F')
 * // => false
 *
 * isMD5('2d343c21e805b25f')
 * // => false
 *
 */
function isMD5(value: string): boolean {
  return md5.test(value);
}

export default isMD5;
