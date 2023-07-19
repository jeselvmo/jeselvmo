import upperCase from './upperCase';

/**
 * Converts `string` to [constant case].
 *
 * @since 2.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the constant cased string.
 * @example
 *
 * constantCase('Foo Bar');
 * // => 'FOO_BAR'
 *
 * constantCase('--foo-bar--');
 * // => 'FOO_BAR'
 *
 * constantCase('__FOO_BAR__');
 * // => 'FOO_BAR'
 */
function constantCase(string?: string): string {
  return upperCase(string).replace(/ /g, '_');
}

export default constantCase;
