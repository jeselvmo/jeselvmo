import _lowerFirst from 'lodash/lowerFirst';
/**
 * Converts string to camel case.
 * @param {string} str The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * jeselvmo.lowerFirstCase('--foo-bar');
 * //=> '--foo-bar'
 *
 */
function lowerFirstCase(str) {
  return _lowerFirst(str);
}

export default lowerFirstCase;
