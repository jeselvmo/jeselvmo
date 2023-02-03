import _createCompounder from 'lodash/_createCompounder';
import capitalize from 'lodash/capitalize';
/**
 * Converts string to pascal case.
 * @param {string} str The string to convert.
 * @returns {string} Returns the pascal cased string.
 *
 * @example
 *
 * jeselvmo.pascalCase('--foo-bar');
 * //=> 'FooBar'
 *
 */
const pascalCase = _createCompounder(function (result, word, index) {
  return result + (index ? '' : '') + capitalize(word);
});

export default pascalCase;
