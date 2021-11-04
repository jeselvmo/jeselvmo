import assertString from './util/assertString';

const jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;

/**
 * 检查是否是JWT。
 * @param {string} str - 要检查的字符串
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI...');
 * //=> true
 *
 */
function isJWT(str) {
  assertString(str);
  return jwt.test(str);
}

export default isJWT;
