import qs from 'querystringify';

/**
 * 对象序列化为查询字符串，并对键进行排序。
 * @param {Object} object - 必选。要序列化的对象。
 * @param {Object} [prefix] - 可选。prefix: true、&
 * @returns {string} 序列化后字符串。
 *
 * @example
 *
 * jeselvmo.toQueryString({ foo: bar });
 * //=> 'foo=bar'
 *
 * jeselvmo.toQueryString({ foo: bar }, true);
 * //=> '?foo=bar'
 *
 * jeselvmo.toQueryString({ foo: bar }, '&');
 * //=> '&foo=bar'
 *
 * jeselvmo.toQueryString({ foo: '' }, '&');
 * //=> '&foo='
 */
function toQueryString(object, prefix) {
  return qs.stringify(object, prefix);
}

export default toQueryString;
