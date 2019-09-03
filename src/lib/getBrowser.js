import parseUA from './parseUA';

/**
 * 获取浏览器信息。
 * @returns {string} 返回浏览器信息。
 */
function getBrowser() {
  return parseUA().browser;
}

export default getBrowser;
