import isIOS from './isIOS';
import isAndroid from './isAndroid';
import isHarmonyOS from './isHarmonyOS';

/**
 * Checks if `userAgent` is an Mobile environment.
 *
 * @since 2.1.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The user agent to check.
 * @returns {boolean} Returns `true` if `userAgent` is a Mobile environment, else `false`.
 * @example
 *
 * isMobile()
 * // => true
 */
function isMobile() {
  return isIOS() || isAndroid() || isHarmonyOS();
}

export default isMobile;
