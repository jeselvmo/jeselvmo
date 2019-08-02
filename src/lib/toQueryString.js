import queryString from './util/queryString';

/**
 * 对象序列化为查询字符串，并对键进行排序。
 * @param {Object} object - 必选。要序列化的对象。
 * @param {Object} [options] - 可选。选项配置：
 * @param {boolean} [options.strict=true] - Strictly encode URI components with strict-uri-encode. It uses encodeURIComponent if set to false. You probably don't care about this option.
 * @param {boolean} [options.encode=true] - URL encode the keys and values.
 * @param {string} [options.arrayFormat='none'] - 'bracket': Serialize arrays using bracket representation。<br/>
 *                                        'index': Serialize arrays using index representation。<br/>
 *                                        'comma': Serialize arrays by separating elements with comma。<br/>
 *                                        'none': Serialize arrays by using duplicate keys。<br/>
 * @param {(function|boolean)} [options.sort=false] - Supports both Function as a custom sorting function or false to disable sorting.
 *
 * @example
 *
 * // arrayFormat = 'bracket'
 * jeselvmo.toQueryString({foo: [1, 2, 3]}, {arrayFormat: 'bracket'});
 * //=> 'foo[]=1&foo[]=2&foo[]=3'
 *
 * // arrayFormat = 'index'
 * jeselvmo.toQueryString({foo: [1, 2, 3]}, {arrayFormat: 'index'});
 * //=> 'foo[0]=1&foo[1]=2&foo[2]=3'
 *
 * // arrayFormat = 'comma'
 * jeselvmo.toQueryString({foo: [1, 2, 3]}, {arrayFormat: 'comma'});
 * //=> 'foo=1,2,3'
 *
 * // arrayFormat = 'none'
 * jeselvmo.toQueryString({foo: [1, 2, 3]});
 * //=> 'foo=1&foo=2&foo=3'
 */
export default function toQueryString(object, options) {
  return queryString.stringify(object, options);
}
