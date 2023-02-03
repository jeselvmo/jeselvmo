import _lowerFirst from 'lodash/lowerFirst';

/**
 * Converts the first character of `string` to lower case.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * lowerFirst('Fred');
 * // => 'fred'
 *
 * lowerFirst('FRED');
 * // => 'fRED'
 */
function lowerFirst(string?: string): string {
  return _lowerFirst(string);
}

export default lowerFirst;
