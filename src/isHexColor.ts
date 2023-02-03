const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

/**
 * Checks if `value` is a Hex Color string.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a Hex Color string, else `false`.
 * @example
 *
 * isHexColor('#FFFFFF')
 * // => true
 *
 * isHexColor('#FFFFFFFF')
 * // => false
 *
 */
function isHexColor(value: string): boolean {
  return hexcolor.test(value);
}

export default isHexColor;
