/* eslint-disable no-else-return */
import assertString from './util/assertString';

function toString(input) {
  if (typeof input === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || (isNaN(input) && !input.length)) {
    input = '';
  }
  return String(input);
}

/**
 * 检查字符串是否在数组中，或对象中。
 * @param {string} str 检查字符串。
 * @param {Object} options 可以是数组、对象。数组：检查数组是否包含该字符串；对象：检查对象是否包含该属性。
 * @return {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isIn('a', ['a', 'b']);
 * //=> true
 *
 * jeselvmo.isIn('name', {name:''});
 * //=> true
 */
export default function isIn(str, options) {
  assertString(str);
  let i;
  if (Object.prototype.toString.call(options) === '[object Array]') {
    const array = [];
    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = toString(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if (typeof options === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }
  return false;
}
