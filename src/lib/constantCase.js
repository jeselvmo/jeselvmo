import _createCompounder from 'lodash/_createCompounder';
/**
 * Converts string to constant case.
 * @param {string} str The string to convert.
 * @returns {string} Returns the constant cased string.
 *
 * @example
 *
 * jeselvmo.constantCase('--foo-bar');
 * //=> 'FOO_BAR'
 *
 */
const constantCase = _createCompounder(function (result, word, index) {
  return result + (index ? '_' : '') + word.toUpperCase();
});

export default constantCase;
