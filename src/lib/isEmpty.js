/* eslint-disable eqeqeq */
import isType from './isType';

/**
 * 判断是否为空。
 * ['', undefined, null, NaN, 'Invalid Date', [], {}]
 *
 * @param  {string}  input 检验对象
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isEmpty('');
 * //=> true
 *
 * jeselvmo.isEmpty(undefined);
 * //=> true
 *
 * jeselvmo.isEmpty(null);
 * //=> true
 *
 * jeselvmo.isEmpty(0);
 * //=> false
 *
 * jeselvmo.isEmpty(false);
 * //=> false
 *
 * jeselvmo.isEmpty(NaN);
 * //=> true
 *
 * jeselvmo.isEmpty('null');
 * //=> false
 *
 * jeselvmo.isEmpty(new Date('2021-01-35'));
 * //=> true
 *
 * jeselvmo.isEmpty([]);
 * //=> true
 *
 * jeselvmo.isEmpty({});
 * //=> true
 *
 */
function isEmpty(input) {
  if (input === undefined || input === null || input === '') {
    return true;
  }

  if (isType(input, 'Number')) {
    return isNaN(input);
  }

  if (isType(input, 'Date')) {
    return input == 'Invalid Date';
  }

  if (isType(input, 'Array')) {
    return input.length === 0;
  }

  if (isType(input, 'Map') || isType(input, 'Set')) {
    return input.size === 0;
  }

  if (isType(input, 'Object')) {
    return Object.keys(input).length === 0;
  }

  return false;
}

export default isEmpty;
