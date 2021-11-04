import isInt from './isInt';

/**
 * 检查是不是端口号。
 * @param {string} str - 要检查的字符串。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isPort(0);
 * //=> true
 *
 * jeselvmo.isPort(65535);
 * //=> true
 *
 * jeselvmo.isPort(65536);
 * //=> false
 *
 * jeselvmo.isPort(-65536);
 * //=> false
 *
 */
function isPort(str) {
  return isInt(str, { min: 0, max: 65535 });
}

export default isPort;
