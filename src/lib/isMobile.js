import isIOS from './isIOS';
import isAndroid from './isAndroid';
import isHarmonyOS from './isHarmonyOS';

/**
 * 检查是不是移动端环境。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isMobile();
 * //=> true
 *
 * jeselvmo.isMobile();
 * //=> false
 *
 */
function isMobile() {
  return isIOS() || isAndroid() || isHarmonyOS();
}

export default isMobile;
