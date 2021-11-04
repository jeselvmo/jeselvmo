/* eslint-disable no-else-return */
import typeOf from './typeOf';

/**
 * 检查字符串是否在数组中，或对象中。
 * @param {string} input 检查字符串
 * @param {Object} options 可以是数组、对象。数组：检查数组是否包含该字符串；对象：检查对象是否包含该属性
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isIn('a', ['a', 'b']);
 * //=> true
 *
 * jeselvmo.isIn('name', {name:'yangkk'});
 * //=> true
 *
 * jeselvmo.isIn('name', () => false);
 * //=> false
 *
 */
function isIn(input, options) {
  if (typeOf(options) === 'Array') {
    return options.indexOf(input) >= 0;
  } else if (typeof options === 'object') {
    return options.hasOwnProperty(input);
  } else if (typeof options === 'function') {
    return options(input);
  }
  return false;
}

export default isIn;
