import getBrowser from './getBrowser';
/**
 * 检查是不是移动端环境。
 * @returns {boolean} 真/假。
 */
function isIE() {
  return getBrowser().name === 'IE';
}

export default isIE;
