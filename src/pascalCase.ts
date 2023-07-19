import _camelCase from 'lodash/camelCase';
import _upperFirst from 'lodash/upperFirst';

/**
 * Converts `string` to [pascal case].
 *
 * @since 2.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the pascal cased string.
 * @example
 *
 * pascalCase('Foo Bar');
 * // => 'FooBar'
 *
 * pascalCase('--foo-bar--');
 * // => 'FooBar'
 *
 * pascalCase('__FOO_BAR__');
 * // => 'FooBar'
 */
function pascalCase(string?: string): string {
  return _upperFirst(_camelCase(string));
}

export default pascalCase;
