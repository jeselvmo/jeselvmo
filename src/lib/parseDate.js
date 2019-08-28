import dateFormat from 'date-format';
import assertString from './util/assertString';

/**
 * 解析日期字符串
 * @param {(Date|string|number)} str - 要解析的字符串。
 * @param {string} [pattern] - 格式，默认为"yyyy-MM-dd hh:mm:ss.SSS"。
 * @returns {string} 解析后日期。
 *
 * @example
 *
 * jeselvmo.parseDate("2019-08-02 11:53:37.000");
 * //=> "2019-08-02 11:51:20"
 *
 * jeselvmo.parseDate("2019-08-02 11:53:37.000", "yyyy-MM-dd hh:mm:ss.SSS");
 * //=> "2019-08-02 11:53:37"
 */

function parseDate(str, pattern = 'yyyy-MM-dd hh:mm:ss.SSS') {
  assertString(str);
  return dateFormat.parse(pattern, str);
}

export default parseDate;
