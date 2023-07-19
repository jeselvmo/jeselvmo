import getBrowser from './getBrowser';
/**
 * Checks if `userAgent` is Chrome browser environment.
 *
 * @since 2.1.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The user agent to check.
 * @returns {boolean} Returns `true` if `userAgent` is Chrome browser browser, else `false`.
 * @example
 *
 * isChrome()
 * // => true
 */
function isChrome(userAgent?: string): boolean {
  return getBrowser(userAgent).name === 'Chrome';
}

export default isChrome;
