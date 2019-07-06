import Url from './url/index';

/**
 *@param {string} url 完整的URL地址
 *@returns {object} 自定义的对象
 */
function parseUrl(url) {
  return new Url(url);
}

export default parseUrl;
