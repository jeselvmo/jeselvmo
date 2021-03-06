/**
 * 检查是不是Mac环境。
 * @returns {boolean} 真/假。
 */
function isMac() {
  let p = navigator.platform;
  return p === 'Mac68K' || p === 'MacPPC' || p === 'Macintosh' || p === 'MacIntel';
}

export default isMac;
