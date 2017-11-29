/* eslint-disable no-var,no-underscore-dangle,no-unused-vars,quote-props,object-property-newline,no-multi-assign,object-curly-spacing,max-len,object-shorthand,no-mixed-operators,prefer-template,space-in-parens,brace-style,vars-on-top,no-redeclare,prefer-arrow-callback,block-scoped-var,import/no-mutable-exports */

/*
 *  dateutil
 *
 *  https://github.com/borgar/dateutil/blob/master/dateutil.js
 *
 *  - provides formatting, parsing and other utility functions for dates.
 *
 * Copyright (c) 2009 Borgar Þorsteinsson
 * Licensed under the terms of the MIT (LICENSE.txt) software license.
 *
 */

var SECOND_SIZE = 1000;
var MINUTE_SIZE = SECOND_SIZE * 60;
var HOUR_SIZE = MINUTE_SIZE * 60;
var DAY_SIZE = HOUR_SIZE * 24;
var WEEK_SIZE = DAY_SIZE * 7;
var MONTH_SIZE = DAY_SIZE * 30.436875; // average month size
var YEAR_SIZE = DAY_SIZE * 365.2425;  // average year size

var _toString = Object.prototype.toString;
// var _m = 'January February March April May June July August September October November December'.split(' ');
// var _d = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ');

var method_size = {
	'FullYear': 6, 'Month': 5, 'Date': 4, 'Hours': 3,
	'Minutes': 2, 'Seconds': 1, 'Milliseconds': 0
};
var method_map = {
	'yr': 'FullYear',
	'year': 'FullYear',
	'years': 'FullYear',
	'mn': 'Month',
	'month': 'Month',
	'months': 'Month',
	'day': 'Date',
	'days': 'Date',
	'date': 'Date',
	'hr': 'Hours',
	'hour': 'Hours',
	'hours': 'Hours',
	'min': 'Minutes',
	'minute': 'Minutes',
	'minutes': 'Minutes',
	'sec': 'Seconds',
	'second': 'Seconds',
	'seconds': 'Seconds',
	'ms': 'Milliseconds',
	'millisecond': 'Milliseconds',
	'milliseconds': 'Milliseconds'
};


let DateUtils = {
	//
	lang: {
		'en': {
			longMouths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			shortMouths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			longWeeks: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			shortWeeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		},
		'cn': {
			longMouths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
			shortMouths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
			longWeeks: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
			shortWeeks: ['日', '一', '二', '三', '四', '五', '六']
		}
	},

	// patterns
	patterns: {
		date: 'Y-m-d',
		date_: 'Ymd',
		time: 'H:i:s',
		time_: 'His',
		datetime: 'Y-m-d H:i:s',
		datetime_: 'YmdHis',
		year: 'Y',
	},


	// *****************************************
	// *** *** *** formats & parsers *** *** ***
	// *****************************************


	parsers: {

		// year + month + day + time
		// -- currently doesn't really support fractions on anything other than seconds >> FIXME
		// -- does not support timezones other than Zulu
		date_and_time: {
			test: /^(?:[+\-]\d{6}|\d{4})(?:(?:\-\d\d){1,2}|\d{4})[T ](?:\d\d)(?::?\d\d){0,2}(?:[\.,]\d+)?(?:Z|[+\-]\d\d(:?\d\d)?)?$/,
			size: 1,
			parse: function (str) {
				var b = str.split(/[T ]/);
				var date = DateUtils.parsers.date.parse(b[0]);
				var m = b[1].replace(/:/g, '')
					.match(/^(\d\d)(\d\d)?(\d\d)?(?:[.,](\d+))?([+\-](?:\d\d){1,2})?/);
				// TODO: timezone (I have no need for this feature yet)
				// if ( m[5] ) { var zone = m[5] || '0000'; }
				var fs = 0, t = date.getTime() +
					parseInt(m[1], 10) * HOUR_SIZE +
					parseInt(m[2] || '0', 10) * MINUTE_SIZE +
					parseInt(m[3] || '0', 10) * SECOND_SIZE;
				if (m[3]) {
					fs = SECOND_SIZE;
				}
				else if (m[2]) {
					fs = MINUTE_SIZE;
				}
				else if (m[1]) {
					fs = HOUR_SIZE;
				}
				t += parseFloat('0.' + ( m[4] || '0' )) * fs;
				date.setTime(t);
				date.size = 0;
				return date;
			}
		},

		// year + month + day
		date: {
			test: /^(?:[+\-]\d{6}|\d{4})(?:\-\d\d\-\d\d|\-?\d\d\d\d)$/,
			size: DAY_SIZE,
			parse: function (str) {
				var m = /^([+\-]\d{6}|\d{4})\-?(\d\d)\-?(\d\d)$/.exec(str),
					d = DateUtils.date(m[1], +m[2] - 1, m[3]);
				d.size = DAY_SIZE;
				return d;
			}
		},

		// year + month
		year_and_month: {
			test: /^[+\-]?\d{4,6}[\/\-](?:0[1-9]|1[012])$/,
			size: MONTH_SIZE,
			parse: function (str) {
				var b = str.split(/[\/\-]/);
				var d = DateUtils.date(b[0], +b[1] - 1, 1);
				d.size = DateUtils.daysInMonth(d) * DAY_SIZE;
				return d;
			}
		},

		// year
		year: {
			test: /^[+\-]?\d{4,6}$/,
			size: YEAR_SIZE,
			parse: function (str) {
				var d = DateUtils.date(str, 0, 1);
				d.size = DAY_SIZE * ( DateUtils.isLeapYear(d) ? 366 : 365 );
				return d;
			}
		},

		// year + iso week + [day]
		year_and_week: {
			test: /^[+\-]?\d{4,6}\-?[Ww]\d\d(?:\-?\d)?$/,
			size: WEEK_SIZE,
			parse: function (str) {
				var s = str.toLowerCase().replace(/[^w\d]/g, '').split('w');
				var d = DateUtils.date(s[0], 0, 3);  // Jan 3
				d.setDate(3 - d.getDay() +
					( parseInt(s[1].substr(0, 2), 10) - 1 ) * 7 +
					parseInt(s[1].substr(2, 1) || '1', 10));
				d.size = WEEK_SIZE;
				return d;
			}
		},

		// year + day-of-year
		// -- we don't allow the short form yyyyddd because of ambiguity with yyyymmdd
		// -- 5 letter years would clash with cal-dates: yyyyyddd ~ yyyymmdd
		year_and_ordinal: {
			test: /^[+\-]?\d{4,6}\-[0-3]\d\d$/,
			size: DAY_SIZE,
			parse: function (str) {
				var d = new Date(0);
				d.setFullYear(parseInt(str.substr(0, str.length - 4), 10));
				d.setDate(parseInt(str.substr(str.length - 3), 10));
				d.size = DAY_SIZE;
				return d;
			}
		},

		// year + quarter
		year_and_quarter: {
			test: /^[+\-]?\d{4,6}\-?[Qq][1-4]$/,
			size: YEAR_SIZE / 4,
			parse: function (str) {
				var b = str.split(/\-?[Qq]/),
					d = DateUtils.date(b[0], ( parseInt(b[1], 10) - 1 ) * 3);
				d.size = DAY_SIZE;
				return d;
			}
		}

	},

	formats: {
		// Lowercase Ante meridiem and Post meridiem
		a: function (d) {
			return d.getHours() >= 12 ? 'pm' : 'am';
		},
		// Uppercase Ante meridiem and Post meridiem
		A: function (d) {
			return d.getHours() >= 12 ? 'PM' : 'AM';
		},
		// ISO 8601 date
		c: function (d, l) {
			return DateUtils.isoyear(d) +
				DateUtils.format(d, '-m-d\\TH:i:s.', l) +
				DateUtils.pad(d.getMilliseconds(), 3) + 'Z';
		},
		// Day of the month, 2 digits with leading zeros
		d: function (d) {
			return DateUtils.pad(d.getDate());
		},
		// A textual representation of a day, three letters
		D: function (d, l = DateUtils.lang.en) {
			return l.shortWeeks[d.getDay()];
		},
		// Time zone identifier
		e: function (d) {
			return '';
		},
		// A full textual representation of a month
		F: function (d, l = DateUtils.lang.en) {
			return l.longMouths[d.getMonth()];
		},
		// 12-hour format of an hour without leading zeros
		g: function (d) {
			return d.getHours() % 12 || 12;
		},
		// 24-hour format of an hour without leading zeros
		G: function (d) {
			return d.getHours();
		},
		// 12-hour format of an hour with leading zeros
		h: function (d) {
			return DateUtils.pad(d.getHours() % 12 || 12);
		},
		// 24-hour format of an hour with leading zeros
		H: function (d) {
			return DateUtils.pad(d.getHours());
		},
		// Minutes with leading zeros
		i: function (d) {
			return DateUtils.pad(d.getMinutes());
		},
		// Day of the month without leading zeros
		j: function (d) {
			return d.getDate();
		},
		// A full textual representation of the day of the week
		l: function (d, l = DateUtils.lang.en) {
			return l.longWeeks[d.getDay()];
		},
		// Whether it's a leap year (0 = yes, 1 = no)
		L: function (d) {
			return DateUtils.isLeapYear(d) * 1;
		},
		// Numeric representation of a month, with leading zeros
		m: function (d) {
			return DateUtils.pad(d.getMonth() + 1);
		},
		// A short textual representation of a month, three letters
		M: function (d, l = DateUtils.lang.en) {
			return l.shortMouths[d.getMonth()];
		},
		// Numeric representation of a month, without leading zeros
		n: function (d) {
			return d.getMonth() + 1;
		},
		// ISO-8601 numeric representation of the day of the week
		N: function (d) {
			return d.getDay() || 7;
		},
		// ISO-8601 year number
		o: function (d) {
			return DateUtils.pad(DateUtils.isocalendar(d)[0], 4);
		},
		// Time zone designator
		O: function (d) {
			return '+0000';
		},
		// Time zone difference
		P: function (d) {
			return '+00:00';
		},
		// Quarter of the year
		q: function (d) {
			return ~~( d.getMonth() / 3 ) + 1;
		},
		// RFC 2822 formatted date
		r: function (d, l) {
			return DateUtils.format(d, 'D, d M Y H:i:s O', l);
		},
		// Seconds, with leading zeros
		s: function (d) {
			return DateUtils.pad(d.getSeconds());
		},
		// English ordinal suffix for the day of the month, 2 characters
		S: function (d) {
			var a = d.getDate() % 10, b = d.getDate() % 100;
			return (a === 1) && (b !== 11) && 'st' ||
				(a === 2) && (b !== 12) && 'nd' ||
				(a === 3) && (b !== 13) && 'rd' || 'th';
		},
		// Number of days in the given month
		t: function (d) {
			return DateUtils.daysInMonth(d);
		},
		// Time zone abbreviation
		T: function (d) {
			return '';
		},
		// Microseconds
		u: function (d) {
			return d.getMilliseconds();
		},
		// Microseconds
		U: function (d) {
			return DateUtils.pad(d.getMilliseconds(), 3);
		},
		// Numeric representation of the day of the week
		w: function (d) {
			return d.getDay();
		},
		// ISO-8601 week number of year, weeks starting on Monday
		W: function (d) {
			return DateUtils.pad(DateUtils.isocalendar(d)[1]);
		},
		// A short numeric representation of a year, 2 digits
		y: function (d) {
			return (d.getFullYear() + '').substr(2);
		},
		// A full numeric representation of a year, 4 digits
		Y: function (d) {
			return d.getFullYear();
		},
		// The day of the year (starting from 0)
		z: function (d) {
			return Math.floor(( d - (new Date(d.getFullYear(), 0, 1))) / DAY_SIZE);
		}
	},


	// **************************************
	// *** *** *** module methods *** *** ***
	// **************************************

	// translation hook
	// _(s, lang) {
	// 	var l = lang && this.lang[lang];
	// 	return ( l && s in l ) ? l[s] : s;
	// },

	now() {
		return ( typeof Date.now === 'function' ) ? Date.now() : +new Date();
	},

	// return a Date object for the current date (0 time)
	today() {
		return this.set(this.date(), {
			hour: 0, minute: 0, second: 0, millisecond: 0
		});
	},
	// parse a date
	parse(str) {
		var d;
		if (typeof str !== 'string') {
			throw new Error("dateutil parser can't parse non-strings.");
		}
		for (var dtype in DateUtils.parsers) {
			if (DateUtils.parsers[dtype].test.test(str)) {
				d = DateUtils.parsers[dtype].parse(str);
				d.type = dtype;
				d.size = d.size || 0;
				break;
			}
		}
		// default parser supports RFC and a few more, or returns an "invalid date"
		if (!d) {
			d = new Date(str);
			d.size = 0;
			d.type = 'unknown_date';
		}
		return d;
	},


	// format a date to string
	format(d, fmt = DateUtils.patterns.date, lang) {

		// has been moved to the Date prototype?
		if (_toString.call(this) === '[object Date]') {
			lang = fmt;
			fmt = d;
			d = this;
		}
		else if (_toString.call(d) !== '[object Date]') {
			// 支持：1510631530404
			// 支持：Tue Nov 14 2017 11:52:10 GMT+0800 (CST)
			d = new Date(d);
			if (_toString.call(d) !== '[object Date]') {
				throw new Error('No date passed to format.');
			}
		}

		for (var r = [], c, l = fmt.length, i = 0; i < l; i++) {
			c = fmt.charAt(i);
			// format characters
			if (c !== '\\') {
				r.push((c in DateUtils.formats) ? DateUtils.formats[c](d, lang) : c);
			}
			// escaped characters & unreconized characters
			else {
				c = i < fmt.length ? fmt.charAt(++i) : c;
				r.push(c);
			}
		}
		return r.join('');
	},

	// format a date to string
	formatAll(d, l) {

		for (let k in this.formats) {
			console.log(k + ':' + this.format(d, k, l))
		}

	},

	date(y, m, d, h, n, s, ms) {
		if (!arguments.length) {
			return new Date(this.now());
		}
		y = parseInt(y || 0, 10);
		if (arguments.length === 1) {
			return new Date(y);
		}
		var ts = Date.UTC(y, parseInt(m || 0, 10), parseInt(d || 1, 10),
			parseInt(h || 0, 10), parseInt(n || 0, 10), parseInt(s || 0, 10),
			parseInt(ms || 0, 10));
		var d = new Date(ts);
		if (y < 100 && y >= 0) { // JS date ranges 0-99 are interpreted by Date. as 1900-1999
			d.setFullYear(y);
		}
		return d;
	},


	// zero pad a string n to l places
	pad(n, l) {
		var s = this.pad.z;
		if (!s) { // This mess is here because JSlint breaks on new Array(999)
			var a = [];
			a[999] = '';
			s = this.pad.z = a.join('0');
		}
		s += n;
		return s.substring(s.length - ( l || 2 ));
	},

	// is a given year a leap year
	isLeapYear(y) {
		if (_toString.call(y) === '[object Date]') {
			y = y.getFullYear();
		}
		return (( y % 4 === 0 ) && ( y % 100 !== 0 )) || ( y % 400 === 0 );
	},


	// return the number of days in a date's month
	daysInMonth(dt) {
		var m = dt.getMonth();
		if (m === 1) {
			return this.isLeapYear(dt) ? 29 : 28;
		}
		return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m];
	},


	// return a 3-tuple, (ISO year, ISO week number, ISO weekday).
	isocalendar(dt) {
		var d = dt.getDay();
		var t = new Date(dt.valueOf());
		t.setDate(t.getDate() - ((d + 6) % 7) + 3);
		var iso_year = t.getFullYear();
		var w = Math.floor((t.getTime() - this.date(iso_year, 0, 1, -6)) / 86400000);
		return [iso_year, 1 + Math.floor(w / 7), d || 7];
	},


	isoyear(dt) {
		var y = dt.getFullYear();
		if (y >= 0 && y <= 9999) {
			return this.pad(Math.abs(y), 4);
		}
		return ( (y < 0) ? '-' : '+' ) + this.pad(Math.abs(y), 6);
	},


	// Allow setting multiple properties at once using object notation:
	// `mydate.set({ hour: 8, minute: 12, second: 0 });`
	set(dt, values) {
		if (typeof values === 'object') {
			var s = [], n, i;
			// step 1: collect a list of values to modify
			for (var key in values) {
				if (key in method_map) {
					n = method_map[key];
					s.push([values[key], n, method_size[n]]);
				}
			}
			// step 2: order values by size
			s = s.sort(function (a, b) {
				return a[2] - b[2];
			});
			// step 3: little endian value zeroing
			for (i = 0; i < s.length; i++) {
				dt['set' + s[i][1]](s[i][1] === 'Date' ? 1 : 0);
			}
			// step 4: big endian value setting
			for (i = s.length; i--;) {
				dt['set' + s[i][1]](s[i][0]);
			}
		}
		return dt;
	},

};

export default DateUtils;
