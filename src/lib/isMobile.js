/**
 * 检查是不是移动端环境。
 * @return {boolean} 真/假
 */
export default function isMobile() {
  return !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
}
