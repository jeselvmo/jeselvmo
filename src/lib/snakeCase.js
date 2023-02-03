import _createCompounder from 'lodash/_createCompounder';
/**
 * Converts string to snake case.
 * @param {string} str The string to convert.
 * @returns {string} Returns the snake cased string.
 *
 * @example
 *
 * jeselvmo.snakeCase('--Foo-Bar');
 * //=> 'foo_bar'
 *
 */
const snakeCase = _createCompounder(function (result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

export default snakeCase;
