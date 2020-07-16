import typeOf from './typeOf';

/**
 * 日期格式化
 * @param {(Date|string|number)} [date] - 要格式化的日期，默认为当前日期。
 * @param {string} [fmt] - 格式，默认为"yyyy-mm-dd HH:MM:ss"。
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
function formatDate(date = new Date(), fmt = 'yyyy-MM-dd hh:mm:ss') {
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

  if (!date || date == null) return null;
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length));
    }
  }
  return fmt;
}

export default formatDate;
