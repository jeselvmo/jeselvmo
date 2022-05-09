import getOS from './getOS';

/**
 * 检查是不是Android环境。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isAndroid();
 * //=> true
 *
 * jeselvmo.isAndroid();
 * //=> false
 */
function isAndroid() {
  return getOS().name === 'Android';
}

export default isAndroid;
