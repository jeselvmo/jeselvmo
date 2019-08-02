/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-template */
import getWeek from './getWeek';
import getDayOfWeek from './getDayOfWeek';

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = `0${val}`;
  }
  return val;
}

const token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
const timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
const timezoneClip = /[^-+\dA-Z]/g;

const i18n = {
  dayNames: [
    '日',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  ],
  monthNames: [
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二',
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ],
  timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM']
};

/**
 * 日期格式化
 * @param {(Date|string|number)} date - 要格式化的日期。
 * @param {string} [mask] - 格式
 * @param {boolean} [utc] -
 * @param {boolean} [gmt] -
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

export default function formatDate(date, mask = 'yyyy-mm-dd HH:MM:ss', utc, gmt) {
  // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
  if (arguments.length === 1 && typeof date === 'string' && !/\d/.test(date)) {
    mask = date;
    date = undefined;
  }

  date = date || new Date();

  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  if (isNaN(date)) {
    throw TypeError('Invalid date');
  }

  // Allow setting the utc/gmt argument via the mask
  let maskSlice = mask.slice(0, 4);
  if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
    mask = mask.slice(4);
    utc = true;
    if (maskSlice === 'GMT:') {
      gmt = true;
    }
  }

  let _ = utc ? 'getUTC' : 'get';
  let d = date[_ + 'Date']();
  let D = date[_ + 'Day']();
  let m = date[_ + 'Month']();
  let y = date[_ + 'FullYear']();
  let H = date[_ + 'Hours']();
  let M = date[_ + 'Minutes']();
  let s = date[_ + 'Seconds']();
  let L = date[_ + 'Milliseconds']();
  let o = utc ? 0 : date.getTimezoneOffset();
  let W = getWeek(date);
  let N = getDayOfWeek(date);
  let flags = {
    d,
    dd: pad(d),
    ddd: i18n.dayNames[D],
    dddd: i18n.dayNames[D + 7],
    m: m + 1,
    mm: pad(m + 1),
    mmm: i18n.monthNames[m],
    mmmm: i18n.monthNames[m + 12],
    yy: String(y).slice(2),
    yyyy: y,
    h: H % 12 || 12,
    hh: pad(H % 12 || 12),
    H,
    HH: pad(H),
    M,
    MM: pad(M),
    s,
    ss: pad(s),
    l: pad(L, 3),
    L: pad(Math.round(L / 10)),
    t: H < 12 ? i18n.timeNames[0] : i18n.timeNames[1],
    tt: H < 12 ? i18n.timeNames[2] : i18n.timeNames[3],
    T: H < 12 ? i18n.timeNames[4] : i18n.timeNames[5],
    TT: H < 12 ? i18n.timeNames[6] : i18n.timeNames[7],
    Z: gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
    o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60), 4),
    S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (((d % 100) - (d % 10) !== 10) * d) % 10],
    W,
    N
  };

  return mask.replace(token, match => {
    if (match in flags) {
      return flags[match];
    }
    return match.slice(1, match.length - 1);
  });
}
