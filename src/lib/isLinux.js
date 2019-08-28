/**
 * 检查是不是Linux环境。
 * @returns {boolean} 真/假。
 */
function isLinux() {
  return navigator.platform.indexOf('Linux') > -1;
}

export default isLinux;
