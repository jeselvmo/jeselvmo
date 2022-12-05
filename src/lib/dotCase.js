import _createCompounder from 'lodash/_createCompounder';
/**
 * Converts string to dot case.
 * @param {string} str The string to convert.
 * @returns {string} Returns the dot cased string.
 *
 * @example
 *
 * jeselvmo.dotCase('--foo-bar');
 * //=> 'foo.bar'
 *
 */
const dotCase = _createCompounder(function (result, word, index) {
  return result + (index ? '.' : '') + word.toLowerCase();
});

export default dotCase;
