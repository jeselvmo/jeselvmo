/* eslint-disable prefer-rest-params */
import assertString from './util/assertString';

/**
 * 校验字符串长度。
 * @param {string} str - 要验证的字符串。
 * @param {Object} [options] - 选项：
 * @param {number} [options.min] - 最小长度
 * @param {number} [options.max] - 最大长度
 * @returns {boolean} 真/假。
 */
function isLength(str, options) {
  assertString(str);
  let min;
  let max;
  if (typeof options === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  const surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  const len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

export default isLength;
