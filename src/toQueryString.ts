import qs, { StringifyOptions } from 'query-string';

/**
 * Serialize to a query string from an object.
 *
 * @since 3.0.0
 * @category Web
 * @param {Object} object The object to serialize.
 * @param {Object} [options]  The options, Refer to `query-string` document
 * @returns {string} Returns the serialized string.
 * @example
 *
 * toQueryString({ foo: bar })
 * // => 'foo=bar'
 *
 * toQueryString({name:'yangkk', age:20})
 * // => 'age=20&name=yangkk'
 *
 */
function toQueryString(object: Record<string, any>, options: StringifyOptions) {
  return qs.stringify(object, options);
}

export default toQueryString;
