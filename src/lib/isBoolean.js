/**
 * 检查是否是boolean类型。
 * @param {string} str - 要检查的字符串。
 * @return {boolean} 真/假
 */
export default function isBoolean(str) {
  return ['true', 'false', '1', '0', true, false, 1, 0].indexOf(str) >= 0;
}
