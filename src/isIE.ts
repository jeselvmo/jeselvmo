import getBrowser from './getBrowser';
/**
 * Checks if `userAgent` is IE environment.
 *
 * @since 3.0.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The user agent to check.
 * @returns {boolean} Returns `true` if `userAgent` is IE environment, else `false`.
 * @example
 *
 * isMac()
 * // => true
 */
function isIE(userAgent?: string): boolean {
  return getBrowser(userAgent).name === 'IE';
}

export default isIE;
