import qs, { ParseOptions } from 'query-string';

/**
 * Get the QueryString in the URL.
 *
 * @since 3.0.0
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
function getQueryString(query?: string, options?: ParseOptions): object {
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
  const arr = query ? query.split(/\?|#/) : [];
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    arr2[i] = qs.parse(str.includes('=') ? str : '', options);
  }

  return Object.assign({}, ...arr2);
}

export default getQueryString;
