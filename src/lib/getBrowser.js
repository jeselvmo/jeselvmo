import parseUA from './parseUA';

/**
 * 获取浏览器信息。
 * @returns {string} 返回浏览器信息
 *
 * @example
 *
 * jeselvmo.getBrowser();
 * //=> {name: 'Chrome', version: '95.0.4638.69', major: '95'}
 *
 */
function getBrowser() {
  return parseUA().browser;
}

export default getBrowser;
