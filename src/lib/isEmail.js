import assertString from './util/assertString';

/**
 * 判断是否为邮箱地址
 * @param  {string}  str 检验字符串。
 * @returns {boolean} 真/假
 */
export default function isEmail(str) {
  assertString(str);
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
