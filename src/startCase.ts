import _startCase from 'lodash/startCase';

/**
 * Converts `string` to [start case].
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * startCase('fooBar');
 * // => 'Foo Bar'
 *
 * startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
function startCase(string?: string): string {
  return _startCase(string);
}

export default startCase;
