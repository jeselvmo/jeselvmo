import _createCompounder from 'lodash/_createCompounder';
/**
 * Converts string to path case.
 * @param {string} str The string to convert.
 * @returns {string} Returns the path cased string.
 *
 * @example
 *
 * jeselvmo.pathCase('--Foo-Bar');
 * //=> 'foo/bar'
 *
 */
const pathCase = _createCompounder(function (result, word, index) {
  return result + (index ? '/' : '') + word.toLowerCase();
});

export default pathCase;
