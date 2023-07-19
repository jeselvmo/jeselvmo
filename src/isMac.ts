import getOS from './getOS';

/**
 * Checks if `userAgent` is a Mac OS environment.
 *
 * @since 2.1.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The user agent to check.
 * @returns {boolean} Returns `true` if `userAgent` is a Mac OS environment, else `false`.
 * @example
 *
 * isMac()
 * // => true
 */
function isMac(userAgent?: string): boolean {
  return getOS(userAgent).name === 'Mac OS';
}

export default isMac;
