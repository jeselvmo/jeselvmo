import getBrowser from './getBrowser';
/**
 * 检查是不是IE浏览器。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isIE();
 * //=> false
 *
 */
function isIE() {
  return getBrowser().name === 'IE';
}

export default isIE;
