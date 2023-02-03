import _upperCase from 'lodash/upperCase';

/**
 * Converts `string`, as space separated words, to upper case.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @example
 *
 * upperCase('--foo-bar');
 * // => 'FOO BAR'
 *
 * upperCase('fooBar');
 * // => 'FOO BAR'
 *
 * upperCase('__foo_bar__');
 * // => 'FOO BAR'
 */
function upperCase(string?: string): string {
  return _upperCase(string);
}

export default upperCase;
