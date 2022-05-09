import getOS from "./getOS";

/**
 * 检查是不是Linux环境。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isLinux();
 * //=> true
 *
 * jeselvmo.isLinux();
 * //=> false
 *
 */
function isLinux() {
  return getOS().name === 'Linux';
}

export default isLinux;
