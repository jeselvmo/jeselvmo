import _createCompounder from 'lodash/_createCompounder';
import capitalize from 'lodash/capitalize';

/**
 * Converts string to sentence case.
 * @sentence {string} str The string to convert.
 * @returns {string} Returns the sentence cased string.
 *
 * @example
 *
 * jeselvmo.sentenceCase('--foo-bar');
 * //=> 'Foo bar'
 *
 */
const sentenceCase = _createCompounder(function (result, word, index) {
  return result + (index ? ' ' + word.toLowerCase() : capitalize(word));
});

export default sentenceCase;
