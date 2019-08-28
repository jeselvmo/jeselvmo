/**
 * 检查是不是iOS环境。
 * @returns {boolean} 真/假。
 */
function isIOS() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

export default isIOS;
