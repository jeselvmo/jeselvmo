import isInt from './isInt';

/**
 * 检查是不是端口号。
 * @param {string} str - 要检查的字符串。
 * @return {boolean} 真/假
 */
export default function isPort(str) {
  return isInt(str, { min: 0, max: 65535 });
}
