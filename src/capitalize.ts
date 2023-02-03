import _capitalize from 'lodash/capitalize';

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('FRED');
 * // => 'Fred'
 *
 * capitalize('--foo-bar--');
 * // => '--foo-bar--'
 *
 * capitalize('foo-bar');
 * // => 'Foo-bar'
 */
function capitalize(string?: string): string {
  return _capitalize(string);
}

export default capitalize;
