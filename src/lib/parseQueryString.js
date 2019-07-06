import queryString from './query-string/index';

/**
 *
 * @desc   解析url参数
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
function parseQueryString(input, options) {
  return queryString.parse(input, options);
}

export default parseQueryString;
