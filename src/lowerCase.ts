import _lowerCase from 'lodash/lowerCase';

/**
 * Converts `string`, as space separated words, to lower case.
 *
 * @since 2.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * lowerCase('--Foo-Bar--');
 * // => 'foo bar'
 *
 * lowerCase('fooBar');
 * // => 'foo bar'
 *
 * lowerCase('__FOO_BAR__');
 * // => 'foo bar'
 */
function lowerCase(string?: string): string {
  return _lowerCase(string);
}

export default lowerCase;
