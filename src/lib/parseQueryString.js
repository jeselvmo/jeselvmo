import queryString from './util/queryString';

/**
 *
 * 将查询字符串解析为对象。首先会忽略?或者#，所以您可以直接传入`location.search`或`location.hash`。<br/>
 * 返回的对象是用`object .create(null)`创建的，因此没有原型。
 *
 * @param  {string} input - 要解析的字符串，可以传入`location.search`。
 * @param  {Object} [options] - 选项：
 * @param  {boolean} [options.decode=true] - Decode the keys and values. URL components are decoded with `decode-uri-component`.
 * @param  {string} [options.arrayFormat='none'] - 'bracket': Parse arrays with bracket representation.<br/>
 *                                            'index': Parse arrays with index representation.<br/>
 *                                            'comma': Parse arrays with elements separated by comma.<br/>
 *                                            'none': Parse arrays with elements using duplicate keys.<br/>
 * @param  {(function|boolean)} [options.sort=true] - Supports both Function as a custom sorting function or false to disable sorting.
 * @param  {boolean} [options.parseNumbers=false] - Parse the value as a number type instead of string type if it's a number.
 * @param  {boolean} [options.parseBooleans=false] - Parse the value as a boolean type instead of string type if it's a boolean.
 * @return {Object} 返回解析后的对象。
 *
 * @example
 *
 * jeselvmo.parseQueryString(location.search);
 * //=> {foo: 'bar'}
 *
 * jeselvmo.parseQueryString('foo[]=1&foo[]=2&foo[]=3', {arrayFormat: 'bracket'});
 * //=> {foo: ['1', '2', '3']}
 *
 */
export default function parseQueryString(input, options) {
  return queryString.parse(input, options);
}
