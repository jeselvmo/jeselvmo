import _createCompounder from 'lodash/_createCompounder';

/**
 * Converts string to lower case.
 * @lower {string} str The string to convert.
 * @returns {string} Returns the lower cased string.
 *
 * @example
 *
 * jeselvmo.lowerCase('--foo-bar');
 * //=> 'foo bar'
 *
 */
const lowerCase = _createCompounder(function (result, word, index) {
  return result + (index ? ' ' : '') + word.toLowerCase();
});

export default lowerCase;
