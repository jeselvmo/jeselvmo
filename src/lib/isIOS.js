/**
 * 检查是不是iOS环境。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isIOS();
 * //=> true
 *
 * jeselvmo.isIOS();
 * //=> false
 *
 */
function isIOS() {
  return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
}

export default isIOS;
