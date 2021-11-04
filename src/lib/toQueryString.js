import qs from 'query-string';

/**
 * 对象序列化为查询字符串。
 * @param {Object} object - 要序列化的对象
 * @param {Object} [options] - 选项，参考query-string文档。
 * @returns {string} 序列化后字符串。
 *
 * @example
 *
 * jeselvmo.toQueryString({ foo: bar });
 * //=> 'foo=bar'
 *
 * jeselvmo.toQueryString({name:'yangkk', age:20});
 * //=> 'age=20&name=yangkk'
 *
 */
function toQueryString(object, options) {
  return qs.stringify(object, options);
}

export default toQueryString;
