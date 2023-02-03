import _createCompounder from 'lodash/_createCompounder';
import capitalize from 'lodash/capitalize';
/**
 * Converts string to title case.
 * @param {string} str The string to convert.
 * @returns {string} Returns the title cased string.
 *
 * @example
 *
 * jeselvmo.titleCase('--foo-bar');
 * //=> 'Foo Bar'
 *
 */
const titleCase = _createCompounder(function (result, word, index) {
  return result + (index ? ' ' : '') + capitalize(word);
});

export default titleCase;
