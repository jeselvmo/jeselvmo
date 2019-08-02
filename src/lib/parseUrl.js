import Url from './util/Url';

/**
 * 解析URL字符串。
 *@param {string} url 完整的URL地址
 *@returns {object} 自定义的Url对象
 */
export default function parseUrl(url) {
  return new Url(url);
}
