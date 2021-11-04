import assertString from './util/assertString';

const md5 = /^[a-fA-F0-9]{32}$/;

/**
 * 检查是不是MD5。
 * @param {string} str - 要检查的字符串
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isMD5('E10ADC3949BA59ABBE56E057F20F883E');
 * //=> true
 *
 */
function isMD5(str) {
  assertString(str);
  return md5.test(str);
}

export default isMD5;
