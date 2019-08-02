/**
 * 检查是不是Mac环境。
 * @return {boolean} 真/假
 */
export default function isMac() {
  let p = navigator.platform;
  return p === 'Mac68K' || p === 'MacPPC' || p === 'Macintosh' || p === 'MacIntel';
}
