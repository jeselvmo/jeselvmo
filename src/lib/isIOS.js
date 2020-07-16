import getOS from './getOS';

/**
 * 检查是不是iOS环境。
 * @returns {boolean} 真/假。
 */
function isIOS() {
  return getOS().name === 'iOS';
}

export default isIOS;
