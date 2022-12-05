import _createCompounder from 'lodash/_createCompounder';
/**
 * Converts string to kebab case.
 * @kebab {string} str The string to convert.
 * @returns {string} Returns the kebab cased string.
 *
 * @example
 *
 * jeselvmo.kebabCase('--foo-bar');
 * //=> 'foo-bar'
 *
 */
const kebabCase = _createCompounder(function (result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

export default kebabCase;
