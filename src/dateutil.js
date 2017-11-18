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
var _m = 'January February March April May June July August September October November December'.split(' ');
var _d = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ');

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


let dateutil = {
	//
	lang: {'en': {}},

	// formatters
	YMD: 'Ymd',
	YMD2: 'Y-m-d',
	HMS: 'His',
	HMS2: 'H:i:s',
	YMDHMS: 'YmdHis',
	YMDHMS2: 'Y-m-d H:i:s',


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
				var date = dateutil.parsers.date.parse(b[0]);
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
					d = dateutil.date(m[1], +m[2] - 1, m[3]);
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
				var d = dateutil.date(b[0], +b[1] - 1, 1);
				d.size = dateutil.daysInMonth(d) * DAY_SIZE;
				return d;
			}
		},

		// year
		year: {
			test: /^[+\-]?\d{4,6}$/,
			size: YEAR_SIZE,
			parse: function (str) {
				var d = dateutil.date(str, 0, 1);
				d.size = DAY_SIZE * ( dateutil.isLeapYear(d) ? 366 : 365 );
				return d;
			}
		},

		// year + iso week + [day]
		year_and_week: {
			test: /^[+\-]?\d{4,6}\-?[Ww]\d\d(?:\-?\d)?$/,
			size: WEEK_SIZE,
			parse: function (str) {
				var s = str.toLowerCase().replace(/[^w\d]/g, '').split('w');
				var d = dateutil.date(s[0], 0, 3);  // Jan 3
				d.setUTCDate(3 - d.getUTCDay() +
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
				d.setUTCFullYear(parseInt(str.substr(0, str.length - 4), 10));
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
					d = dateutil.date(b[0], ( parseInt(b[1], 10) - 1 ) * 3);
				d.size = DAY_SIZE;
				return d;
			}
		}

	},

	formats: {
		// Lowercase Ante meridiem and Post meridiem
		a: function (d) {
			return d.getUTCHours() >= 12 ? 'pm' : 'am';
		},
		// Uppercase Ante meridiem and Post meridiem
		A: function (d) {
			return d.getUTCHours() >= 12 ? 'PM' : 'AM';
		},
		// ISO 8601 date
		c: function (d, l) {
			return dateutil.isoyear(d) +
				dateutil.format(d, '-m-d\\TH:i:s.', l) +
				dateutil.pad(d.getUTCMilliseconds(), 3) + 'Z';
		},
		// Day of the month, 2 digits with leading zeros
		d: function (d) {
			return dateutil.pad(d.getUTCDate());
		},
		// A textual representation of a day, three letters
		D: function (d, l) {
			return dateutil._(_d[d.getUTCDay()].substr(0, 3), l);
		},
		// Time zone identifier
		e: function (d) {
			return 'UTC';
		},
		// A full textual representation of a month
		F: function (d, l) {
			return dateutil._(_m[d.getUTCMonth()], l);
		},
		// 12-hour format of an hour without leading zeros
		g: function (d) {
			return d.getUTCHours() % 12 || 12;
		},
		// 24-hour format of an hour without leading zeros
		G: function (d) {
			return d.getUTCHours();
		},
		// 12-hour format of an hour with leading zeros
		h: function (d) {
			return dateutil.pad(d.getUTCHours() % 12 || 12);
		},
		// 24-hour format of an hour with leading zeros
		H: function (d) {
			return dateutil.pad(d.getUTCHours());
		},
		// Minutes with leading zeros
		i: function (d) {
			return dateutil.pad(d.getUTCMinutes());
		},
		// Day of the month without leading zeros
		j: function (d) {
			return d.getUTCDate();
		},
		// A full textual representation of the day of the week
		l: function (d, l) {
			return dateutil._(_d[d.getUTCDay()], l);
		},
		// Whether it's a leap year (0 = yes, 1 = no)
		L: function (d) {
			return dateutil.isLeapYear(d) * 1;
		},
		// Numeric representation of a month, with leading zeros
		m: function (d) {
			return dateutil.pad(d.getUTCMonth() + 1);
		},
		// A short textual representation of a month, three letters
		M: function (d, l) {
			return dateutil._(_m[d.getUTCMonth()].substr(0, 3), l);
		},
		// Numeric representation of a month, without leading zeros
		n: function (d) {
			return d.getUTCMonth() + 1;
		},
		// ISO-8601 numeric representation of the day of the week
		N: function (d) {
			return d.getUTCDay() || 7;
		},
		// ISO-8601 year number
		o: function (d) {
			return dateutil.pad(dateutil.isocalendar(d)[0], 4);
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
			return ~~( d.getUTCMonth() / 3 ) + 1;
		},
		// RFC 2822 formatted date
		r: function (d, l) {
			return dateutil.format(d, 'D, d M Y H:i:s O', l);
		},
		// Seconds, with leading zeros
		s: function (d) {
			return dateutil.pad(d.getUTCSeconds());
		},
		// English ordinal suffix for the day of the month, 2 characters
		S: function (d) {
			var a = d.getUTCDate() % 10, b = d.getUTCDate() % 100;
			return (a === 1) && (b !== 11) && 'st' ||
				(a === 2) && (b !== 12) && 'nd' ||
				(a === 3) && (b !== 13) && 'rd' || 'th';
		},
		// Number of days in the given month
		t: function (d) {
			return dateutil.daysInMonth(d);
		},
		// Time zone abbreviation
		T: function (d) {
			return 'UTC';
		},
		// Microseconds
		u: function (d) {
			return dateutil.pad(d.getUTCMilliseconds(), 6);
		},
		// Seconds since the Unix Epoch
		U: function (d) {
			return ~~( d / 1000 );
		},
		// Numeric representation of the day of the week
		w: function (d) {
			return d.getUTCDay();
		},
		// ISO-8601 week number of year, weeks starting on Monday
		W: function (d) {
			return dateutil.pad(dateutil.isocalendar(d)[1]);
		},
		// A short numeric representation of a year, 2 digits
		y: function (d) {
			return (d.getUTCFullYear() + '').substr(2);
		},
		// A full numeric representation of a year, 4 digits
		Y: function (d) {
			return d.getUTCFullYear();
		},
		// The day of the year (starting from 0)
		z: function (d) {
			return Math.floor(( d - (new Date(Date.UTC(d.getUTCFullYear(), 0, 1))) ) / DAY_SIZE);
		}
	},

	formats2: {
		a: 'pm',
		A: 'PM',
		c: '2017-11-15T16:31:56.127Z',
		d: '15',
		D: 'Wed',
		e: 'UTC',
		F: 'November',
		g: '4',
		G: '16',
		h: '04',
		H: '16',
		i: '31',
		j: '15',
		l: 'Wednesday',
		L: '0',
		m: '11',
		M: 'Nov',
		n: '11',
		N: '3',
		o: '2017',
		O: '+0000',
		P: '+00:00',
		q: '4',
		r: 'Wed, 15 Nov 2017 16:31:56 +0000',
		s: '56',
		S: 'th',
		t: '30',
		T: 'UTC',
		u: '000127',
		U: '1510763516',
		w: '3',
		W: '46',
		y: '17',
		Y: '2017',
		z: '318'
	},


	// **************************************
	// *** *** *** module methods *** *** ***
	// **************************************

	// translation hook
	_(s, lang) {
		var l = lang && this.lang[lang];
		return ( l && s in l ) ? l[s] : s;
	},

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
		for (var dtype in dateutil.parsers) {
			if (dateutil.parsers[dtype].test.test(str)) {
				d = dateutil.parsers[dtype].parse(str);
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
	format(d, fmt = dateutil.ymd_, lang) {

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
				r.push((c in dateutil.formats) ? dateutil.formats[c](d, lang) : c);
			}
			// escaped characters & unreconized characters
			else {
				c = i < fmt.length ? fmt.charAt(++i) : c;
				r.push(c);
			}
		}
		return r.join('');
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
		if (y < 100 && y >= 0) { // JS date ranges 0-99 are interpreted by Date.UTC as 1900-1999
			d.setUTCFullYear(y);
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
			y = y.getUTCFullYear();
		}
		return (( y % 4 === 0 ) && ( y % 100 !== 0 )) || ( y % 400 === 0 );
	},


	// return the number of days in a date's month
	daysInMonth(dt) {
		var m = dt.getUTCMonth();
		if (m === 1) {
			return this.isLeapYear(dt) ? 29 : 28;
		}
		return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m];
	},


	// return a 3-tuple, (ISO year, ISO week number, ISO weekday).
	isocalendar(dt) {
		var d = dt.getUTCDay();
		var t = new Date(dt.valueOf());
		t.setDate(t.getDate() - ((d + 6) % 7) + 3);
		var iso_year = t.getUTCFullYear();
		var w = Math.floor((t.getTime() - this.date(iso_year, 0, 1, -6)) / 86400000);
		return [iso_year, 1 + Math.floor(w / 7), d || 7];
	},


	isoyear(dt) {
		var y = dt.getUTCFullYear();
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
				dt['setUTC' + s[i][1]](s[i][1] === 'Date' ? 1 : 0);
			}
			// step 4: big endian value setting
			for (i = s.length; i--;) {
				dt['setUTC' + s[i][1]](s[i][0]);
			}
		}
		return dt;
	},

};

export default dateutil;
