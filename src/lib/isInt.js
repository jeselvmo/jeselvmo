import assertString from './util/assertString';

/**
 * 校验整型字符串。
 * @param {string} str - 要验证的字符串。
 * @param {Object} [options] - 选项：
 * @param {number} [options.min] - 最小值，包含当前值。
 * @param {number} [options.max] - 最大值，包含当前值。
 * @param {number} [options.lt] - 小于该值。
 * @param {number} [options.gt] - 大于该值。
 * @returns {boolean} 真/假
 */
export default function isInt(str, options) {
  options = options || {};

  if (typeof str !== 'string') {
    str += '';
  }

  let regex = /^[-+]?[0-9]+$/;

  // Check min/max/lt/gt
  let minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  let maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  let ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  let gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
