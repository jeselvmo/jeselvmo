/**
 * Checks if `userAgent` is an Android environment.
 *
 * @since 3.0.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The user agent to check.
 * @returns {boolean} Returns `true` if `userAgent` is an Android environment, else `false`.
 * @example
 *
 * isAndroid()
 * // => true
 *
 * isAndroid()
 * // => false
 */
function isAndroid(userAgent?: string): boolean {
  userAgent = userAgent || navigator.userAgent;
  return Boolean(userAgent.match(/Android/gi));
}

export default isAndroid;
