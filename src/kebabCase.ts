import _kebabCase from 'lodash/kebabCase';

/**
 * Converts `string` to [kebab case].
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
function kebabCase(value: any): string {
  return _kebabCase(value);
}

export default kebabCase;
