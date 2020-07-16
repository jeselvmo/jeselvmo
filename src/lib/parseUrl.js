import Url from 'url-parse';
import qs from 'querystringify';

/**
 * 解析URL字符串。
 *@param {string} [url] 完整的URL地址
 *@returns {object} 自定义的Url对象
 */
function parseUrl(url) {
  const obj = new Url(url || window.location.href);
  delete obj.auth;
  delete obj.username;
  delete obj.password;
  delete obj.slashes;
  obj.search = obj.query;
  obj.query = qs.parse(obj.query);
  obj.toString = () => obj.origin + obj.pathname + obj.search + obj.hash;
  return obj;
}

export default parseUrl;
