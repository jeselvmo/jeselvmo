/**
 * Checks if `userAgent` is a Wechat environment.
 *
 * @since 3.0.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The user agent to check.
 * @returns {boolean} Returns `true` if `userAgent` is a Wechat environment, else `false`.
 * @example
 *
 * isWeiXin()
 * // => true
 */
function isWeiXin(userAgent?: string): boolean {
  userAgent = userAgent || navigator.userAgent;
  return Boolean(userAgent.match(/MicroMessenger/gi));
}

export default isWeiXin;
