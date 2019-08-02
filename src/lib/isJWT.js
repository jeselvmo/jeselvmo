import assertString from './util/assertString';

const jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;

/**
 * 检查是否是JWT。
 * @param {string} str - 要检查的字符串。
 * @return {boolean} 真/假
 */
export default function isJWT(str) {
  assertString(str);
  return jwt.test(str);
}
