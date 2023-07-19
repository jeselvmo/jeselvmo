/**
 * Checks if `userAgent` is an HarmonyOS environment.
 *
 * @since 2.1.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The user agent to check.
 * @returns {boolean} Returns `true` if `userAgent` is an HarmonyOS environment, else `false`.
 * @example
 *
 * isHarmonyOS()
 * // => true
 *
 * isHarmonyOS()
 * // => false
 */
function isHarmonyOS(userAgent?: string): boolean {
  userAgent = userAgent || navigator.userAgent;
  return Boolean(userAgent.match(/HarmonyOS/gi));
}

export default isHarmonyOS;
