import getOS from './getOS';
/**
 * Checks if `userAgent` is a Linux environment.
 *
 * @since 2.1.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The user agent to check.
 * @returns {boolean} Returns `true` if `userAgent` is a Linux environment, else `false`.
 * @example
 *
 * isLinux()
 * // => true
 */
function isLinux(userAgent?: string): boolean {
  return getOS(userAgent).name === 'Linux';
}

export default isLinux;
