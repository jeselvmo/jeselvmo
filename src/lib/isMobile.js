/**
 * 检查是不是移动端环境。
 * @returns {boolean} 真/假。
 */
function isMobile() {
  return !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
}

export default isMobile;
