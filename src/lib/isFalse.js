/* eslint-disable eqeqeq */
import isType from './isType';

/**
 * 判断是否为假。以下列表中的值都为false。
 * ['', undefined, null, 0, false, NaN, 'null', 'undefined', 'Invalid Date']
 *
 * @param  {string}  input 检验对象
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isFalse('');
 * //=> true
 *
 * jeselvmo.isFalse(undefined);
 * //=> true
 *
 * jeselvmo.isFalse(null);
 * //=> true
 *
 * jeselvmo.isFalse(0);
 * //=> true
 *
 * jeselvmo.isFalse(false);
 * //=> true
 *
 * jeselvmo.isFalse(NaN);
 * //=> true
 *
 * jeselvmo.isFalse(new Date('2021-01-35'));
 * //=> true
 *
 */
function isFalse(input) {
  if (
    input === '' ||
    input === undefined ||
    input === null ||
    input === 0 ||
    input === false ||
    (isType(input, 'Number') && isNaN(input)) ||
    (isType(input, 'Date') && input == 'Invalid Date')
  ) {
    return true;
  }
  return false;
}

export default isFalse;
