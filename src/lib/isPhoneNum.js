/**
 * 检查是否为手机号
 * @param  {(string|number)} str - 要检查的字符串。
 * @return {boolean}
 */
export default function isPhoneNum(str) {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str);
}
