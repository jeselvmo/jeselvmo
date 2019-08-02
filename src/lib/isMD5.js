import assertString from './util/assertString';

const md5 = /^[a-f0-9]{32}$/;

/**
 * 检查是不是MD5。
 * @param {string} str - 要检查的字符串。
 * @return {boolean} 真/假
 */
export default function isMD5(str) {
  assertString(str);
  return md5.test(str);
}
