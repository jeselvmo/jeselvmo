import _capitalize from 'lodash/capitalize';
import lowerCase from './lowerCase';

/**
 * Converts `string` to [dot case].
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the dot cased string.
 * @example
 *
 * titleCase('Foo Bar');
 * // => 'Foo Bar'
 *
 * titleCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * titleCase('__FOO_BAR__');
 * // => 'Foo Bar'
 */
function titleCase(string?: string): string {
  return lowerCase(string)
    .split(' ')
    .map(word => _capitalize(word))
    .join(' ');
}

export default titleCase;
