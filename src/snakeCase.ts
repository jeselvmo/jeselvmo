import _snakeCase from 'lodash/snakeCase';

/**
 * Converts `string` to [snake case].
 *
 * @since 2.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
function snakeCase(string?: string): string {
  return _snakeCase(string);
}

export default snakeCase;
