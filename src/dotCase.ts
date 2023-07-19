import lowerCase from './lowerCase';

/**
 * Converts `string` to [dot case].
 *
 * @since 2.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the dot cased string.
 * @example
 *
 * dotCase('Foo Bar');
 * // => 'foo.bar'
 *
 * dotCase('--foo-bar--');
 * // => 'foo.bar'
 *
 * dotCase('__FOO_BAR__');
 * // => 'foo.bar'
 */
function dotCase(string?: string): string {
  return lowerCase(string).replace(/ /g, '.');
}

export default dotCase;
