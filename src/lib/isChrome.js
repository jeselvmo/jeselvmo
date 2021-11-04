import getBrowser from './getBrowser';
/**
 * 检查是不是Chrome浏览器。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isChrome();
 * //=> false
 *
 */
function isChrome() {
  return getBrowser().name === 'Chrome';
}

export default isChrome;
