import qs from 'querystringify';
import assertString from './util/assertString';

/**
 *
 * 将查询字符串解析为对象。首先会忽略?或者#，所以您可以直接传入`location.search`或`location.hash`。
 *
 * @param  {string} input - 要解析的字符串，可以传入`location.search`。
 * @return {Object} 返回解析后的对象。
 *
 * @example
 *
 * jeselvmo.parseQueryString('?foo=bar');
 * //=> { foo: 'bar' }
 *
 * jeselvmo.parseQueryString('foo=bar&bar=foo');
 * //=> { foo: 'bar', bar: 'foo' }
 *
 */
function parseQueryString(input) {
  assertString(input);
  return qs.parse(input);
}

export default parseQueryString;
