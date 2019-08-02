/**
 * 检查是不是Linux环境。
 * @return {boolean} 真/假
 */
export default function isLinux() {
  return navigator.platform.indexOf('Linux') > -1;
}
