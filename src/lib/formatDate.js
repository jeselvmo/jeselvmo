import dayjs from 'dayjs';
import typeOf from './typeOf';

/**
 * 日期格式化
 * @param {(Date|string|number)} [date] - 要格式化的日期，默认为当前日期。
 * @param {string} [fmt] - 格式，默认为"YYYY-MM-DD HH:mm:ss"。
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
 * jeselvmo.formatDate(1635927338667, "YYYY-MM-DD HH:mm:ss");
 * //=> "2019-08-02 11:53:37"
 *
 * jeselvmo.formatDate(1635927338)
 * //=> '2019-08-02 11:53:37'
 *
 * jeselvmo.formatDate(1635927338, 'YYYY-MM-DD')
 * //=> '2021-11-03'
 */
function formatDate(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
  const type = typeOf(date);
  if (type === 'Number') {
    let len = `${date}`.length;
    if (len === 10) {
      date = new Date(date * 1000);
    } else {
      date = new Date(date);
    }
  } else if (type === 'String') {
    date = new Date(date);
  }

  if (!date) date = new Date();

  return dayjs(date).format(fmt);
}

export default formatDate;
