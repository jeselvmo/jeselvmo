const jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;

/**
 * Checks if `value` is a JWT string.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a JWT string, else `false`.
 * @example
 *
 * isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI...')
 * // => true
 *
 */
function isJWT(value: string): boolean {
  return jwt.test(value);
}

export default isJWT;
