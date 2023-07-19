import _upperFirst from 'lodash/upperFirst';

/**
 * Converts the first character of `string` to upper case.
 *
 * @since 2.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * upperFirst('fred');
 * // => 'Fred'
 *
 * upperFirst('FRED');
 * // => 'FRED'
 */
function upperFirst(string?: string): string {
  return _upperFirst(string);
}

export default upperFirst;
