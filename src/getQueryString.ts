import _merge from 'lodash/merge';
import qs, { ParseOptions } from 'query-string';

interface QueryResult {
  [key: string]: any;
}

/**
 * Get the QueryString in the URL.
 *
 * @since 2.1.0
 * @category Web
 * @param  {string} [query] The query string, default: location.href.
 * @param  {object} [options] The options, Refer to `query-string` document.
 * @returns {Object} Returns the query object.
 * @example
 *
 * getQueryString()
 * // => {asdfasf: '1', name: 'yangkk'}
 *
 * getQueryString('http://localhost:9000/?asdfasf=1#/course?name=yangkk')
 * // => {asdfasf: '1', name: 'yangkk'}
 *
 */
function getQueryString(): QueryResult;
function getQueryString(query: string): QueryResult;
function getQueryString(options: ParseOptions): QueryResult;
function getQueryString(query?: string | ParseOptions, options?: ParseOptions): QueryResult {
  switch (arguments.length) {
    case 0:
      query = location.href;
      break;
    case 1:
      if (typeof query === 'object') {
        options = query;
        query = location.href;
      }
      break;
    default:
      break;
  }

  const arr = query && typeof query === 'string' ? query.split(/\?|#/) : [];
  const results: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    const part = arr[i];
    results[i] = qs.parse(part.includes('=') ? part : '', options);
  }

  return _merge({}, ...results);
}

getQueryString();

export default getQueryString;
