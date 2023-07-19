import lowerCase from './lowerCase';

/**
 * Converts `string` to [path case].
 *
 * @since 2.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the path cased string.
 * @example
 *
 * pathCase('Foo Bar');
 * // => 'foo/bar'
 *
 * pathCase('--foo-bar--');
 * // => 'foo/bar'
 *
 * pathCase('__FOO_BAR__');
 * // => 'foo/bar'
 */
function pathCase(string?: string): string {
  return lowerCase(string).replace(/ /g, '/');
}

export default pathCase;
