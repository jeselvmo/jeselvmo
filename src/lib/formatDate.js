import dateFormat from 'date-format';

/**
 * 日期格式化
 * @param {(Date|string|number)} [date] - 要格式化的日期，默认为当前日期。
 * @param {string} [pattern] - 格式，默认为"yyyy-mm-dd HH:MM:ss"。
 * @returns {string} 格式后的字符串。
 *
 * @example
 *
 * jeselvmo.formatDate();
 * //=> "2019-08-02 11:51:34"
 *
 * jeselvmo.formatDate(new Date());
 * //=> "2019-08-02 11:51:20"
 *
 * jeselvmo.formatDate(new Date(), "yyyy-mm-dd HH:MM:ss");
 * //=> "2019-08-02 11:53:37"
 */

function formatDate(date = new Date(), pattern = 'yyyy-MM-dd hh:mm:ss') {
  return dateFormat(pattern, date);
}

export default formatDate;
