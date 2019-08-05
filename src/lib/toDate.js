import assertString from './util/assertString';

/**
 * 转换为Date类型。
 * @param {string} date 日期字符串。
 * @returns {Date} 转换后的日期。
 */
function toDate(date) {
  assertString(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}

export default toDate;
