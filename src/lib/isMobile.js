import getDevice from './getDevice';

/**
 * 检查是不是移动端环境。
 * @returns {boolean} 真/假。
 */
function isMobile() {
  return getDevice().type === 'mobile';
}

export default isMobile;
