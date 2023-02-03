import getOS from './getOS';

/**
 * Checks if `userAgent` is a Windows environment.
 *
 * @since 3.0.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The user agent to check.
 * @returns {boolean} Returns `true` if `userAgent` is a Windows environment, else `false`.
 * @example
 *
 * isWindows()
 * // => true
 */
function isWindows(userAgent?: string): boolean {
  return getOS(userAgent).name === 'Windows';
}

export default isWindows;
