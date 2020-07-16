import getOS from './getOS';

/**
 * 检查是不是Android环境。
 * @returns {boolean} 真/假。
 */
function isAndroid() {
  return getOS().name === 'Android';
}

export default isAndroid;
