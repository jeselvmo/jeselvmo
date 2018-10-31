/**
 * @desc 日期格式化
 * @param date
 * @param mask
 * @param utc
 * @param gmt
 * @returns {string}
 */
import typeOf from "./typeOf";
import getWeek from "./getWeek";
import getDayOfWeek from "./getDayOfWeek";
import pad from "./pad";

const token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
const timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
const timezoneClip = /[^-+\dA-Z]/g;

const i18n = {
    dayNames: [
        '日', '一', '二', '三', '四', '五', '六',
        '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'
    ],
    monthNames: [
        '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二',
        '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    timeNames: [
        'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
};

function formatDate(date, mask = 'yyyy-mm-dd HH:MM:ss', utc, gmt) {

    // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
    if (arguments.length === 1 && typeOf(date) === 'string' && !/\d/.test(date)) {
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
    var maskSlice = mask.slice(0, 4);
    if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
        mask = mask.slice(4);
        utc = true;
        if (maskSlice === 'GMT:') {
            gmt = true;
        }
    }

    var _ = utc ? 'getUTC' : 'get';
    var d = date[_ + 'Date']();
    var D = date[_ + 'Day']();
    var m = date[_ + 'Month']();
    var y = date[_ + 'FullYear']();
    var H = date[_ + 'Hours']();
    var M = date[_ + 'Minutes']();
    var s = date[_ + 'Seconds']();
    var L = date[_ + 'Milliseconds']();
    var o = utc ? 0 : date.getTimezoneOffset();
    var W = getWeek(date);
    var N = getDayOfWeek(date);
    var flags = {
        d: d,
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
        H: H,
        HH: pad(H),
        M: M,
        MM: pad(M),
        s: s,
        ss: pad(s),
        l: pad(L, 3),
        L: pad(Math.round(L / 10)),
        t: H < 12 ? i18n.timeNames[0] : i18n.timeNames[1],
        tt: H < 12 ? i18n.timeNames[2] : i18n.timeNames[3],
        T: H < 12 ? i18n.timeNames[4] : i18n.timeNames[5],
        TT: H < 12 ? i18n.timeNames[6] : i18n.timeNames[7],
        Z: gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
        o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
        S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
        W: W,
        N: N
    };

    return mask.replace(token, function (match) {
        if (match in flags) {
            return flags[match];
        }
        return match.slice(1, match.length - 1);
    });
}

export default formatDate;
