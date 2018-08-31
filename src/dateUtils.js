/* eslint-disable valid-jsdoc */
/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 *
 *
 * Mask	Description
 * d	Day of the month as digits; no leading zero for single-digit days.
 * dd	Day of the month as digits; leading zero for single-digit days.
 * ddd	Day of the week as a three-letter abbreviation.
 * dddd	Day of the week as its full name.
 * m	Month as digits; no leading zero for single-digit months.
 * mm	Month as digits; leading zero for single-digit months.
 * mmm	Month as a three-letter abbreviation.
 * mmmm	Month as its full name.
 * yy	Year as last two digits; leading zero for years less than 10.
 * yyyy	Year represented by four digits.
 * h	Hours; no leading zero for single-digit hours (12-hour clock).
 * hh	Hours; leading zero for single-digit hours (12-hour clock).
 * H	Hours; no leading zero for single-digit hours (24-hour clock).
 * HH	Hours; leading zero for single-digit hours (24-hour clock).
 * M	Minutes; no leading zero for single-digit minutes.
 * MM	Minutes; leading zero for single-digit minutes.
 * N	ISO 8601 numeric representation of the day of the week.
 * o	GMT/UTC timezone offset, e.g. -0500 or +0230.
 * s	Seconds; no leading zero for single-digit seconds.
 * ss	Seconds; leading zero for single-digit seconds.
 * S	The date's ordinal suffix (st, nd, rd, or th). Works well with d.
 * l	Milliseconds; gives 3 digits.
 * L	Milliseconds; gives 2 digits.
 * t	Lowercase, single-character time marker string: a or p.
 * tt	Lowercase, two-character time marker string: am or pm.
 * T	Uppercase, single-character time marker string: A or P.
 * TT	Uppercase, two-character time marker string: AM or PM.
 * W	ISO 8601 week number of the year, e.g. 42
 * Z	US timezone abbreviation, e.g. EST or MDT. With non-US timezones or in the
 * '...', "..."	Literal character sequence. Surrounding quotes are removed.
 * UTC:	Must be the first four characters of the mask. Converts the date from local time to UTC/GMT/Zulu time before applying the mask. The "UTC:" prefix is removed.
 */

var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
var timezoneClip = /[^-+\dA-Z]/g;

function pad(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) {
        val = '0' + val;
    }
    return val;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
    if (val === null) {
        return 'null';
    }

    if (val === undefined) {
        return 'undefined';
    }

    if (typeof val !== 'object') {
        return typeof val;
    }

    if (Array.isArray(val)) {
        return 'array';
    }

    return {}.toString.call(val).slice(8, -1).toLowerCase();
}

class DateUtils {

    masks = {
        'default': 'yyyy-mm-dd HH:MM:ss',
        'date': 'yyyy-mm-dd',
        'date_': 'yyyymmdd',
        'time': 'HH:MM:ss',
        'time_': 'HHMMss',
        'datetime': 'yyyy-mm-dd HH:MM:ss',
        'datetime_': 'yyyymmddHHMMss',
        'full': 'yyyy-mm-dd HH:MM:ss l',
        'full_': 'yyyymmddHHMMssl'
    };

    langs = {
        'en_US': {
            dayNames: [
                'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
                'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
            ],
            monthNames: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
            ],
            timeNames: [
                'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
            ]
        },
        'zh_CN': {
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
        }
    };

    i18n = this.langs.zh_CN;

    /**
     * Get ISO-8601 numeric representation of the day of the week
     * 1 (for Monday) through 7 (for Sunday)
     *
     * @param  {Object} `date`
     * @return {Number}
     */
    getDayOfWeek(date = new Date()) {
        var dow = date.getDay();
        if (dow === 0) {
            dow = 7;
        }
        return dow;
    }

    /**
     * Get the ISO 8601 week number
     * Based on comments from
     * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
     *
     * @param  {Object} `date`
     * @return {Number}
     */
    getWeek(date = new Date()) {
        // Remove time components of date
        var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

        // Change date to Thursday same week
        targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

        // Take January 4th as it is always in week 1 (see ISO 8601)
        var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

        // Change date to Thursday same week
        firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

        // Check if daylight-saving-time-switch occurred and correct for it
        var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
        targetThursday.setHours(targetThursday.getHours() - ds);

        // Number of weeks between target Thursday and first Thursday
        var weekDiff = (targetThursday - firstThursday) / (86400000 * 7);
        return 1 + Math.floor(weekDiff);
    }

    /**
     * @desc 日期格式化
     * @param date
     * @param mask
     * @param utc
     * @param gmt
     * @returns {string}
     */
    format(date, mask, utc, gmt) {

        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        date = date || new Date;

        if (!(date instanceof Date)) {
            date = new Date(date);
        }

        if (isNaN(date)) {
            throw TypeError('Invalid date');
        }

        mask = String(this.masks[mask] || mask || this.masks['default']);

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
        var W = this.getWeek(date);
        var N = this.getDayOfWeek(date);
        var flags = {
            d: d,
            dd: pad(d),
            ddd: this.i18n.dayNames[D],
            dddd: this.i18n.dayNames[D + 7],
            m: m + 1,
            mm: pad(m + 1),
            mmm: this.i18n.monthNames[m],
            mmmm: this.i18n.monthNames[m + 12],
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
            t: H < 12 ? this.i18n.timeNames[0] : this.i18n.timeNames[1],
            tt: H < 12 ? this.i18n.timeNames[2] : this.i18n.timeNames[3],
            T: H < 12 ? this.i18n.timeNames[4] : this.i18n.timeNames[5],
            TT: H < 12 ? this.i18n.timeNames[6] : this.i18n.timeNames[7],
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

    /**
     * @desc   格式化${startTime}距现在的已过时间
     * @param  {Date} startTime
     * @return {String}
     */
    formatPassTime(startTime) {
        var currentTime = Date.parse(new Date()),
            time = currentTime - startTime,
            day = parseInt(time / (1000 * 60 * 60 * 24)),
            hour = parseInt(time / (1000 * 60 * 60)),
            min = parseInt(time / (1000 * 60)),
            month = parseInt(day / 30),
            year = parseInt(month / 12);
        if (year) return year + "年前"
        if (month) return month + "个月前"
        if (day) return day + "天前"
        if (hour) return hour + "小时前"
        if (min) return min + "分钟前"
        else return '刚刚'
    }

    /**
     *
     * @desc 格式化现在距${endTime}的剩余时间
     * @param  {Date} endTime
     * @return {String}
     */
    formatRemainTime(endTime) {
        var startDate = new Date(); //开始时间
        var endDate = new Date(endTime); //结束时间
        var t = endDate.getTime() - startDate.getTime(); //时间差
        var d = 0,
            h = 0,
            m = 0,
            s = 0;
        if (t >= 0) {
            d = Math.floor(t / 1000 / 3600 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
        }
        return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
    }

    /**
     * @desc   判断是否为同一天
     * @param  {Date} date1
     * @param  {Date} date2 可选／默认值：当天
     * @return {Boolean}
     */
    isSameDay(date1, date2) {
        if (!date2) {
            date2 = new Date();
        }
        var date1_year = date1.getFullYear(),
            date1_month = date1.getMonth() + 1,
            date1_date = date1.getDate();
        var date2_year = date2.getFullYear(),
            date2_month = date2.getMonth() + 1,
            date2_date = date2.getDate()

        return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;

    }
}

const dateUtils = new DateUtils();
export default dateUtils


