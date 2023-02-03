import _createCompounder from 'lodash/_createCompounder';

/**
 * Converts string to upper case.
 * @upper {string} str The string to convert.
 * @returns {string} Returns the upper cased string.
 *
 * @example
 *
 * jeselvmo.upperCase('--foo-bar');
 * //=> 'FOO BAR'
 *
 */
const upperCase = _createCompounder(function (result, word, index) {
  return result + (index ? ' ' : '') + word.toUpperCase();
});

export default upperCase;
