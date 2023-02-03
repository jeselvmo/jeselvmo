import lowerCase from './lowerCase';
import upperFirst from './upperFirst';

/**
 * Converts `string` to [sentence case].
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the sentence cased string.
 * @example
 *
 * sentenceCase('Foo Bar');
 * // => 'Foo bar'
 *
 * sentenceCase('--foo-bar--');
 * // => 'Foo bar'
 *
 * sentenceCase('__FOO_BAR__');
 * // => 'Foo bar'
 */
function sentenceCase(string?: string): string {
  return upperFirst(lowerCase(string));
}

export default sentenceCase;
