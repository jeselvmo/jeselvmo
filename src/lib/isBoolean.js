/**
 * 检查是否是boolean类型。
 * @param {string} str - 要检查的字符串，取值范围：['true', 'false', '1', '0', true, false, 1, 0]
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isBoolean(1);
 * //=> true
 *
 * jeselvmo.isBoolean(0);
 * //=> true
 *
 * jeselvmo.isBoolean(true);
 * //=> true
 *
 * jeselvmo.isBoolean(false);
 * //=> true
 *
 */
function isBoolean(str) {
  return ['true', 'false', '1', '0', true, false, 1, 0].indexOf(str) >= 0;
}

export default isBoolean;
