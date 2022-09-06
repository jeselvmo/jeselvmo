import getOS from './getOS';

/**
 * 检查是不是Mac环境。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isMac();
 * //=> true
 *
 * jeselvmo.isMac();
 * //=> false
 *
 */
function isMac() {
  return getOS().name === 'Mac OS';
}

export default isMac;
