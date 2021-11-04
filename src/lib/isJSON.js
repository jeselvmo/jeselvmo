import assertString from './util/assertString';

/**
 * 检查是否是JSON字符串。
 * @param {string} str - 要检查的字符串
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isJSON('{}');
 * //=> true
 *
 * jeselvmo.isJSON('[]');
 * //=> true
 *
 * jeselvmo.isJSON('{"name": "yangkk"}');
 * //=> true
 *
 * jeselvmo.isJSON('1');
 * //=> false
 *
 */
function isJSON(str) {
  assertString(str);
  try {
    const obj = JSON.parse(str);
    return !!obj && typeof obj === 'object';
  } catch (e) {
    /* ignore */
  }
  return false;
}

export default isJSON;
