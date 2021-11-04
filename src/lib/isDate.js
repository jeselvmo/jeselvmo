import assertString from './util/assertString';

/**
 * 判断是否为日期字符串
 * @param  {string}  str 检验字符串。
 * @returns {boolean} 真/假。
 *
 * @example
 *
 * jeselvmo.isDate('2021-11-04');
 * //=> true
 *
 * jeselvmo.isDate('2021-11-04 12:00:00');
 * //=> false
 *
 *
 */
function isDate(str) {
  assertString(str);
  const date = new Date(str);
  return date.toString() !== 'Invalid Date';
}

export default isDate;
