/**
 * 检查是不是鸿蒙环境。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isHarmonyOS();
 * //=> true
 *
 * jeselvmo.isHarmonyOS();
 * //=> false
 *
 */
function isHarmonyOS() {
  return /(HarmonyOS)/i.test(navigator.userAgent);
}

export default isHarmonyOS;
