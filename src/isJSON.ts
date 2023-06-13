/**
 * Checks if `value` is a JSON string.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a JSON string, else `false`.
 * @example
 *
 * isJson('{}')
 * // => true
 *
 * isJson('[]')
 * // => true
 *
 * isJson('{"name": "yangkk"}')
 * // => true
 *
 * isJson('1')
 * // => false
 *
 */
function isJson(value: string): boolean {
  try {
    const obj = JSON.parse(value);
    return !!obj && typeof obj === 'object';
  } catch (e) {
    /* ignore */
  }
  return false;
}

export default isJson;
