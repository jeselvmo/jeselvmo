import _createCompounder from 'lodash/_createCompounder';
import capitalize from 'lodash/capitalize';
/**
 * Converts string to camel case.
 * @param {string} str The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * jeselvmo.camelCase('--foo-bar');
 * //=> 'fooBar'
 *
 */

const camelCase = _createCompounder(function (result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

export default camelCase;
