/**
 * Checks if `userAgent` is an iOS environment.
 *
 * @since 2.1.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The user agent to check.
 * @returns {boolean} Returns `true` if `userAgent` is an iOS environment, else `false`.
 * @example
 *
 * isIOS()
 * // => true
 *
 * isIOS()
 * // => false
 *
 */
function isIOS(userAgent?: string): boolean {
  userAgent = userAgent || navigator.userAgent;
  return Boolean(userAgent.match(/iPhone|iPad|iPod|iOS/gi));
}

export default isIOS;
