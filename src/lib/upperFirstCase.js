import _upperFirst from 'lodash/upperFirst';
/**
 * Converts string to camel case.
 * @param {string} str The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * jeselvmo.upperFirstCase('--foo-bar');
 * //=> '--foo-bar'
 *
 */
function upperFirstCase(str) {
  return _upperFirst(str);
}

export default upperFirstCase;
