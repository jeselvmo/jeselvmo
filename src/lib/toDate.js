import assertString from './util/assertString';

/**
 * 转换为Date类型。
 * @param {object} date
 */
export default function toDate(date) {
  assertString(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
