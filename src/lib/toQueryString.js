import queryString from './query-string/index';
/**
 * 对象序列化
 */
function toQueryString(object, options) {
  return queryString.stringify(object, options);
}

export default toQueryString;
