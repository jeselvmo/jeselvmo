import assertString from './util/assertString';

/**
 * 检查是否为手机号。
 * @param  {(string|number)} str - 要检查的字符串
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isPhoneNum('15901097100');
 * //=> true
 *
 * jeselvmo.isPhoneNum('159010971');
 * //=> false
 *
 * jeselvmo.isPhoneNum('660600606');
 * //=> false
 *
 *
 */
function isPhoneNum(str) {
  assertString(str);
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str);
}

export default isPhoneNum;
