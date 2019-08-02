/**
 * 检查是不是iOS环境。
 * @return {boolean} 真/假
 */
export default function isIOS() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
