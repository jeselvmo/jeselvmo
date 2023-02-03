const notBase64 = /[^A-Z0-9+\/=]/i;

/**
 * Checks if `value` is Base64 encoded.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is Base64 encoded, else `false`.
 * @example
 *
 * isBase64('ZmFzZGZhc2Rm')
 * // => true
 *
 * isBase64('Y2FzZGFzZA==')
 * // => true
 *
 */
function isBase64(value: string): boolean {
  if (typeof value == 'string') {
    const len = value.length;
    if (!len || len % 4 !== 0 || notBase64.test(value)) {
      return false;
    }
    const firstPaddingChar = value.indexOf('=');
    return firstPaddingChar === -1 || firstPaddingChar === len - 1 || (firstPaddingChar === len - 2 && value[len - 1] === '=');
  }
  return false;
}

export default isBase64;
