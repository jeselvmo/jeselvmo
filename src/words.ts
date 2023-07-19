import _words from 'lodash/words';

/**
 * Splits `string` into an array of its words.
 *
 * @since 2.1.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string?: string, pattern?: string | RegExp): string[] {
  return _words(string, pattern);
}

export default words;
