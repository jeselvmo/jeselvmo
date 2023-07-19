import _camelCase from 'lodash/camelCase';

/**
 * Converts `string` to [camel case].
 *
 * @since 2.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
function camelCase(string?: string): string {
  return _camelCase(string);
}

export default camelCase;
