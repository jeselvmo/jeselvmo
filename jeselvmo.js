/*!
 * Copyright (c) 2016 Chris O'Hara <cohara87@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global.jeselvmo = factory(global.$));
}(this, (function ($) { 'use strict';

$ = $ && 'default' in $ ? $['default'] : $;

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

/* eslint-disable no-var,vars-on-top,no-void,no-underscore-dangle,prefer-template,object-shorthand,import/no-mutable-exports,object-curly-spacing,max-len,prefer-rest-params,no-shadow,no-undef-init,no-cond-assign,block-scoped-var,no-mixed-operators,block-spacing,prefer-arrow-callback,no-unsafe-finally,max-len */
function assertString(input) {
	var isString = typeof input === 'string' || input instanceof String;

	if (!isString) {
		throw new TypeError('This library (validator.js) validates strings only');
	}
}

function toDate(date) {
	assertString(date);
	date = Date.parse(date);
	return !isNaN(date) ? new Date(date) : null;
}

function toFloat(str) {
	assertString(str);
	return parseFloat(str);
}

function toInt(str, radix) {
	assertString(str);
	return parseInt(str, radix || 10);
}

function toBoolean(str, strict) {
	assertString(str);
	if (strict) {
		return str === '1' || str === 'true';
	}
	return str !== '0' && str !== 'false' && str !== '';
}

function equals(str, comparison) {
	assertString(str);
	return str === comparison;
}

var _typeof = typeof Symbol === "function" && _typeof$1(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === 'undefined' ? 'undefined' : _typeof$1(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof$1(obj);
};

function toString(input) {
	if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
		if (typeof input.toString === 'function') {
			input = input.toString();
		} else {
			input = '[object Object]';
		}
	} else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
		input = '';
	}
	return String(input);
}

function contains(str, elem) {
	assertString(str);
	return str.indexOf(toString(elem)) >= 0;
}

function matches(str, pattern, modifiers) {
	assertString(str);
	if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
		pattern = new RegExp(pattern, modifiers);
	}
	return pattern.test(str);
}

function merge() {
	var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var defaults$$1 = arguments[1];

	for (var key in defaults$$1) {
		if (typeof obj[key] === 'undefined') {
			obj[key] = defaults$$1[key];
		}
	}
	return obj;
}

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
	assertString(str);
	var min = void 0;
	var max = void 0;
	if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
		min = options.min || 0;
		max = options.max;
	} else {
		// backwards compatibility: isByteLength(str, min [, max])
		min = arguments[1];
		max = arguments[2];
	}
	var len = encodeURI(str).split(/%..|./).length - 1;
	return len >= min && (typeof max === 'undefined' || len <= max);
}

var default_fqdn_options = {
	require_tld: true,
	allow_underscores: false,
	allow_trailing_dot: false
};

function isFQDN(str, options) {
	assertString(str);
	options = merge(options, default_fqdn_options);

	/* Remove the optional trailing dot before checking validity */
	if (options.allow_trailing_dot && str[str.length - 1] === '.') {
		str = str.substring(0, str.length - 1);
	}
	var parts = str.split('.');
	if (options.require_tld) {
		var tld = parts.pop();
		if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
			return false;
		}
		// disallow spaces
		if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
			return false;
		}
	}
	for (var part, i = 0; i < parts.length; i++) {
		part = parts[i];
		if (options.allow_underscores) {
			part = part.replace(/_/g, '');
		}
		if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
			return false;
		}
		// disallow full-width chars
		if (/[\uff01-\uff5e]/.test(part)) {
			return false;
		}
		if (part[0] === '-' || part[part.length - 1] === '-') {
			return false;
		}
	}
	return true;
}

var default_email_options = {
	allow_display_name: false,
	require_display_name: false,
	allow_utf8_local_part: true,
	require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */

/* eslint-enable no-control-regex */

function isEmail(str, options) {
	assertString(str);
	options = merge(options, default_email_options);

	if (options.require_display_name || options.allow_display_name) {
		var display_email = str.match(displayName);
		if (display_email) {
			str = display_email[1];
		} else if (options.require_display_name) {
			return false;
		}
	}

	var parts = str.split('@');
	var domain = parts.pop();
	var user = parts.join('@');

	var lower_domain = domain.toLowerCase();
	if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
		user = user.replace(/\./g, '').toLowerCase();
	}

	if (!isByteLength(user, { max: 64 }) || !isByteLength(domain, { max: 254 })) {
		return false;
	}

	if (!isFQDN(domain, { require_tld: options.require_tld })) {
		return false;
	}

	if (user[0] === '"') {
		user = user.slice(1, user.length - 1);
		// eslint-disable-next-line max-len
		return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
	}

	var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

	var user_parts = user.split('.');
	for (var i = 0; i < user_parts.length; i++) {
		if (!pattern.test(user_parts[i])) {
			return false;
		}
	}

	return true;
}

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
	var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	assertString(str);
	version = String(version);
	if (!version) {
		return isIP(str, 4) || isIP(str, 6);
	} else if (version === '4') {
		if (!ipv4Maybe.test(str)) {
			return false;
		}
		var parts = str.split('.').sort(function (a, b) {
			return a - b;
		});
		return parts[3] <= 255;
	} else if (version === '6') {
		var blocks = str.split(':');
		var foundOmissionBlock = false; // marker to indicate ::

		// At least some OS accept the last 32 bits of an IPv6 address
		// (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
		// that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
		// and '::a.b.c.d' is deprecated, but also valid.
		var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
		var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

		if (blocks.length > expectedNumberOfBlocks) {
			return false;
		}
		// initial or final ::
		if (str === '::') {
			return true;
		} else if (str.substr(0, 2) === '::') {
			blocks.shift();
			blocks.shift();
			foundOmissionBlock = true;
		} else if (str.substr(str.length - 2) === '::') {
			blocks.pop();
			blocks.pop();
			foundOmissionBlock = true;
		}

		for (var i = 0; i < blocks.length; ++i) {
			// test for a :: which can not be at the string start/end
			// since those cases have been handled above
			if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
				if (foundOmissionBlock) {
					return false; // multiple :: in address
				}
				foundOmissionBlock = true;
			} else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
				// it has been checked before that the last
				// block is a valid IPv4 address
			} else if (!ipv6Block.test(blocks[i])) {
				return false;
			}
		}
		if (foundOmissionBlock) {
			return blocks.length >= 1;
		}
		return blocks.length === expectedNumberOfBlocks;
	}
	return false;
}

var default_url_options = {
	protocols: ['http', 'https', 'ftp'],
	require_tld: true,
	require_protocol: false,
	require_host: true,
	require_valid_protocol: true,
	allow_underscores: false,
	allow_trailing_dot: false,
	allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
	return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
	for (var i = 0; i < matches.length; i++) {
		var match = matches[i];
		if (host === match || isRegExp(match) && match.test(host)) {
			return true;
		}
	}
	return false;
}

function isURL(url, options) {
	assertString(url);
	if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
		return false;
	}
	if (url.indexOf('mailto:') === 0) {
		return false;
	}
	options = merge(options, default_url_options);
	var protocol = void 0,
	    auth = void 0,
	    host = void 0,
	    hostname = void 0,
	    port = void 0,
	    port_str = void 0,
	    split = void 0,
	    ipv6 = void 0;

	split = url.split('#');
	url = split.shift();

	split = url.split('?');
	url = split.shift();

	split = url.split('://');
	if (split.length > 1) {
		protocol = split.shift();
		if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
			return false;
		}
	} else if (options.require_protocol) {
		return false;
	} else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
		split[0] = url.substr(2);
	}
	url = split.join('://');

	if (url === '') {
		return false;
	}

	split = url.split('/');
	url = split.shift();

	if (url === '' && !options.require_host) {
		return true;
	}

	split = url.split('@');
	if (split.length > 1) {
		auth = split.shift();
		if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
			return false;
		}
	}
	hostname = split.join('@');

	port_str = null;
	ipv6 = null;
	var ipv6_match = hostname.match(wrapped_ipv6);
	if (ipv6_match) {
		host = '';
		ipv6 = ipv6_match[1];
		port_str = ipv6_match[2] || null;
	} else {
		split = hostname.split(':');
		host = split.shift();
		if (split.length) {
			port_str = split.join(':');
		}
	}

	if (port_str !== null) {
		port = parseInt(port_str, 10);
		if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
			return false;
		}
	}

	if (!isIP(host) && !isFQDN(host, options) && (!ipv6 || !isIP(ipv6, 6))) {
		return false;
	}

	host = host || ipv6;

	if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
		return false;
	}
	if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
		return false;
	}

	return true;
}

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

function isMACAddress(str) {
	assertString(str);
	return macAddress.test(str);
}

function isBoolean(str) {
	assertString(str);
	return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}

var alpha = {
	'en-US': /^[A-Z]+$/i,
	'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
	'da-DK': /^[A-ZÆØÅ]+$/i,
	'de-DE': /^[A-ZÄÖÜß]+$/i,
	'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
	'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
	'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
	'nb-NO': /^[A-ZÆØÅ]+$/i,
	'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
	'nn-NO': /^[A-ZÆØÅ]+$/i,
	'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
	'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
	'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
	'ru-RU': /^[А-ЯЁ]+$/i,
	'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
	'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
	'sv-SE': /^[A-ZÅÄÖ]+$/i,
	'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
	'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
	ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var alphanumeric = {
	'en-US': /^[0-9A-Z]+$/i,
	'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
	'da-DK': /^[0-9A-ZÆØÅ]+$/i,
	'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
	'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
	'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
	'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
	'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
	'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
	'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
	'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
	'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
	'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
	'ru-RU': /^[0-9А-ЯЁ]+$/i,
	'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
	'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
	'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
	'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
	'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
	ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var decimal = {
	'en-US': '.',
	ar: '٫'
};

var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

for (var locale, i = 0; i < englishLocales.length; i++) {
	locale = 'en-' + englishLocales[i];
	alpha[locale] = alpha['en-US'];
	alphanumeric[locale] = alphanumeric['en-US'];
	decimal[locale] = decimal['en-US'];
}

// Source: http://www.localeplanet.com/java/
var arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
	_locale = 'ar-' + arabicLocales[_i];
	alpha[_locale] = alpha.ar;
	alphanumeric[_locale] = alphanumeric.ar;
	decimal[_locale] = decimal.ar;
}

// Source: https://en.wikipedia.org/wiki/Decimal_mark
var dotDecimal = [];
var commaDecimal = ['cs-CZ', 'da-DK', 'de-DE', 'es-ES', 'fr-FR', 'it-IT', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-Pl', 'pt-PT', 'ru-RU', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];

for (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {
	decimal[dotDecimal[_i2]] = decimal['en-US'];
}

for (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {
	decimal[commaDecimal[_i3]] = ',';
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
decimal['pt-BR'] = decimal['pt-PT'];

function isAlpha(str) {
	var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

	assertString(str);
	if (locale in alpha) {
		return alpha[locale].test(str);
	}
	throw new Error('Invalid locale \'' + locale + '\'');
}

function isAlphanumeric(str) {
	var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

	assertString(str);
	if (locale in alphanumeric) {
		return alphanumeric[locale].test(str);
	}
	throw new Error('Invalid locale \'' + locale + '\'');
}

var numeric = /^[-+]?[0-9]+$/;

function isNumeric(str) {
	assertString(str);
	return numeric.test(str);
}

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
	assertString(str);
	options = options || {};

	// Get the regex to use for testing, based on whether
	// leading zeroes are allowed or not.
	var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

	// Check min/max/lt/gt
	var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
	var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
	var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
	var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

	return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}

function isPort(str) {
	return isInt(str, { min: 0, max: 65535 });
}

function isLowercase(str) {
	assertString(str);
	return str === str.toLowerCase();
}

function isUppercase(str) {
	assertString(str);
	return str === str.toUpperCase();
}

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;

/* eslint-enable no-control-regex */

function isAscii(str) {
	assertString(str);
	return ascii.test(str);
}

var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isFullWidth(str) {
	assertString(str);
	return fullWidth.test(str);
}

var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isHalfWidth(str) {
	assertString(str);
	return halfWidth.test(str);
}

function isVariableWidth(str) {
	assertString(str);
	return fullWidth.test(str) && halfWidth.test(str);
}

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;

/* eslint-enable no-control-regex */

function isMultibyte(str) {
	assertString(str);
	return multibyte.test(str);
}

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
	assertString(str);
	return surrogatePair.test(str);
}

function isFloat(str, options) {
	assertString(str);
	options = options || {};
	var float = new RegExp('^(?:[-+])?(?:[0-9]+)?(?:\\' + (options.locale ? decimal[options.locale] : '.') + '[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$');
	if (str === '' || str === '.') {
		return false;
	}
	return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max) && (!options.hasOwnProperty('lt') || str < options.lt) && (!options.hasOwnProperty('gt') || str > options.gt);
}

function decimalRegExp(options) {
	var regExp = new RegExp('^[-+]?([0-9]+)?(\\' + decimal[options.locale] + '[0-9]{' + options.decimal_digits + '})' + (options.force_decimal ? '' : '?') + '$');
	return regExp;
}

var default_decimal_options = {
	force_decimal: false,
	decimal_digits: '1,',
	locale: 'en-US'
};

var blacklist = ['', '-', '+'];

function isDecimal(str, options) {
	assertString(str);
	options = merge(options, default_decimal_options);
	if (options.locale in decimal) {
		return !blacklist.includes(str.replace(/ /g, '')) && decimalRegExp(options).test(str);
	}
	throw new Error('Invalid locale \'' + options.locale + '\'');
}

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
	assertString(str);
	return hexadecimal.test(str);
}

function isDivisibleBy(str, num) {
	assertString(str);
	return toFloat(str) % parseInt(num, 10) === 0;
}

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

function isHexColor(str) {
	assertString(str);
	return hexcolor.test(str);
}

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
	assertString(str);
	return isrc.test(str);
}

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
	assertString(str);
	return md5.test(str);
}

var lengths = {
	md5: 32,
	md4: 32,
	sha1: 40,
	sha256: 64,
	sha384: 96,
	sha512: 128,
	ripemd128: 32,
	ripemd160: 40,
	tiger128: 32,
	tiger160: 40,
	tiger192: 48,
	crc32: 8,
	crc32b: 8
};

function isHash(str, algorithm) {
	assertString(str);
	var hash = new RegExp('^[a-f0-9]{' + lengths[algorithm] + '}$');
	return hash.test(str);
}

function isJSON(str) {
	assertString(str);
	try {
		var obj = JSON.parse(str);
		return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	} catch (e) {/* ignore */
	}
	return false;
}

function isEmpty(str) {
	assertString(str);
	return str.length === 0;
}

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
	assertString(str);
	var min = void 0;
	var max = void 0;
	if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
		min = options.min || 0;
		max = options.max;
	} else {
		// backwards compatibility: isLength(str, min [, max])
		min = arguments[1];
		max = arguments[2];
	}
	var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
	var len = str.length - surrogatePairs.length;
	return len >= min && (typeof max === 'undefined' || len <= max);
}

var uuid = {
	3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
	4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
	var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

	assertString(str);
	var pattern = uuid[version];
	return pattern && pattern.test(str);
}

function isMongoId(str) {
	assertString(str);
	return isHexadecimal(str) && str.length === 24;
}

function isAfter(str) {
	var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

	assertString(str);
	var comparison = toDate(date);
	var original = toDate(str);
	return !!(original && comparison && original > comparison);
}

function isBefore(str) {
	var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

	assertString(str);
	var comparison = toDate(date);
	var original = toDate(str);
	return !!(original && comparison && original < comparison);
}

function isIn(str, options) {
	assertString(str);
	var i = void 0;
	if (Object.prototype.toString.call(options) === '[object Array]') {
		var array = [];
		for (i in options) {
			if ({}.hasOwnProperty.call(options, i)) {
				array[i] = toString(options[i]);
			}
		}
		return array.indexOf(str) >= 0;
	} else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
		return options.hasOwnProperty(str);
	} else if (options && typeof options.indexOf === 'function') {
		return options.indexOf(str) >= 0;
	}
	return false;
}

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;

/* eslint-enable max-len */

function isCreditCard(str) {
	assertString(str);
	var sanitized = str.replace(/[- ]+/g, '');
	if (!creditCard.test(sanitized)) {
		return false;
	}
	var sum = 0;
	var digit = void 0;
	var tmpNum = void 0;
	var shouldDouble = void 0;
	for (var i = sanitized.length - 1; i >= 0; i--) {
		digit = sanitized.substring(i, i + 1);
		tmpNum = parseInt(digit, 10);
		if (shouldDouble) {
			tmpNum *= 2;
			if (tmpNum >= 10) {
				sum += tmpNum % 10 + 1;
			} else {
				sum += tmpNum;
			}
		} else {
			sum += tmpNum;
		}
		shouldDouble = !shouldDouble;
	}
	return !!(sum % 10 === 0 ? sanitized : false);
}

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
	assertString(str);
	if (!isin.test(str)) {
		return false;
	}

	var checksumStr = str.replace(/[A-Z]/g, function (character) {
		return parseInt(character, 36);
	});

	var sum = 0;
	var digit = void 0;
	var tmpNum = void 0;
	var shouldDouble = true;
	for (var i = checksumStr.length - 2; i >= 0; i--) {
		digit = checksumStr.substring(i, i + 1);
		tmpNum = parseInt(digit, 10);
		if (shouldDouble) {
			tmpNum *= 2;
			if (tmpNum >= 10) {
				sum += tmpNum + 1;
			} else {
				sum += tmpNum;
			}
		} else {
			sum += tmpNum;
		}
		shouldDouble = !shouldDouble;
	}

	return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
	var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	assertString(str);
	version = String(version);
	if (!version) {
		return isISBN(str, 10) || isISBN(str, 13);
	}
	var sanitized = str.replace(/[\s-]+/g, '');
	var checksum = 0;
	var i = void 0;
	if (version === '10') {
		if (!isbn10Maybe.test(sanitized)) {
			return false;
		}
		for (i = 0; i < 9; i++) {
			checksum += (i + 1) * sanitized.charAt(i);
		}
		if (sanitized.charAt(9) === 'X') {
			checksum += 10 * 10;
		} else {
			checksum += 10 * sanitized.charAt(9);
		}
		if (checksum % 11 === 0) {
			return !!sanitized;
		}
	} else if (version === '13') {
		if (!isbn13Maybe.test(sanitized)) {
			return false;
		}
		for (i = 0; i < 12; i++) {
			checksum += factor[i % 2] * sanitized.charAt(i);
		}
		if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
			return !!sanitized;
		}
	}
	return false;
}

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	assertString(str);
	var testIssn = issn;
	testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
	testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
	if (!testIssn.test(str)) {
		return false;
	}
	var issnDigits = str.replace('-', '');
	var position = 8;
	var checksum = 0;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		// eslint-disable-next-line max-len
		for (var _iterator = issnDigits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var digit = _step.value;

			var digitValue = digit.toUpperCase() === 'X' ? 10 : +digit;
			checksum += digitValue * position;
			--position;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return checksum % 11 === 0;
}

/* eslint-disable max-len */
var phones = {
	'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
	'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
	'ar-EG': /^((\+?20)|0)?1[012]\d{8}$/,
	'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
	'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
	'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
	'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
	'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
	'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
	'el-GR': /^(\+?30)?(69\d{8})$/,
	'en-AU': /^(\+?61|0)4\d{8}$/,
	'en-GB': /^(\+?44|0)7\d{9}$/,
	'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
	'en-IN': /^(\+?91|0)?[789]\d{9}$/,
	'en-KE': /^(\+?254|0)?[7]\d{8}$/,
	'en-NG': /^(\+?234|0)?[789]\d{9}$/,
	'en-NZ': /^(\+?64|0)2\d{7,9}$/,
	'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
	'en-RW': /^(\+?250|0)?[7]\d{8}$/,
	'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
	'en-UG': /^(\+?256|0)?[7]\d{8}$/,
	'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
	'en-ZA': /^(\+?27|0)\d{9}$/,
	'en-ZM': /^(\+?26)?09[567]\d{7}$/,
	'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
	'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
	'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
	'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
	'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
	'fr-FR': /^(\+?33|0)[67]\d{8}$/,
	'he-IL': /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
	'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
	'id-ID': /^(\+?62|0[1-9])[\s|\d]+$/,
	'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
	'ja-JP': /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
	'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
	'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
	'lt-LT': /^(\+370|8)\d{8}$/,
	'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
	'nb-NO': /^(\+?47)?[49]\d{7}$/,
	'nl-BE': /^(\+?32|0)4?\d{8}$/,
	'nn-NO': /^(\+?47)?[49]\d{7}$/,
	'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
	'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
	'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
	'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
	'ru-RU': /^(\+?7|8)?9\d{9}$/,
	'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
	'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
	'tr-TR': /^(\+?90|0)?5\d{9}$/,
	'uk-UA': /^(\+?38|8)?0\d{9}$/,
	'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
	'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
	'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */

// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str) {
	var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zh-CN';

	assertString(str);
	if (locale in phones) {
		return phones[locale].test(str);
	} else if (locale === 'any') {
		for (var key in phones) {
			if (phones.hasOwnProperty(key)) {
				var phone = phones[key];
				if (phone.test(str)) {
					return true;
				}
			}
		}
		return false;
	}
	throw new Error('Invalid locale \'' + locale + '\'');
}

function currencyRegex(options) {
	var decimal_digits = '\\d{' + options.digits_after_decimal[0] + '}';
	options.digits_after_decimal.forEach(function (digit, index) {
		if (index !== 0) decimal_digits = decimal_digits + '|\\d{' + digit + '}';
	});
	var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?'),
	    negative = '-?',
	    whole_dollar_amount_without_sep = '[1-9]\\d*',
	    whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*',
	    valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
	    whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?',
	    decimal_amount = '(\\' + options.decimal_separator + '(' + decimal_digits + '))' + (options.require_decimal ? '' : '?');
	var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : '');

	// default is negative sign before symbol, but there are two other options (besides parens)
	if (options.allow_negatives && !options.parens_for_negatives) {
		if (options.negative_sign_after_digits) {
			pattern += negative;
		} else if (options.negative_sign_before_digits) {
			pattern = negative + pattern;
		}
	}

	// South African Rand, for example, uses R 123 (space) and R-123 (no space)
	if (options.allow_negative_sign_placeholder) {
		pattern = '( (?!\\-))?' + pattern;
	} else if (options.allow_space_after_symbol) {
		pattern = ' ?' + pattern;
	} else if (options.allow_space_after_digits) {
		pattern += '( (?!$))?';
	}

	if (options.symbol_after_digits) {
		pattern += symbol;
	} else {
		pattern = symbol + pattern;
	}

	if (options.allow_negatives) {
		if (options.parens_for_negatives) {
			pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
		} else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
			pattern = negative + pattern;
		}
	}

	// ensure there's a dollar and/or decimal amount, and that
	// it doesn't start with a space or a negative sign followed by a space
	return new RegExp('^(?!-? )(?=.*\\d)' + pattern + '$');
}

var default_currency_options = {
	symbol: '$',
	require_symbol: false,
	allow_space_after_symbol: false,
	symbol_after_digits: false,
	allow_negatives: true,
	parens_for_negatives: false,
	negative_sign_before_digits: false,
	negative_sign_after_digits: false,
	allow_negative_sign_placeholder: false,
	thousands_separator: ',',
	decimal_separator: '.',
	allow_decimal: true,
	require_decimal: false,
	digits_after_decimal: [2],
	allow_space_after_digits: false
};

function isCurrency(str, options) {
	assertString(str);
	options = merge(options, default_currency_options);
	return currencyRegex(options).test(str);
}

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;

/* eslint-enable max-len */

function isISO8601(str) {
	assertString(str);
	return iso8601.test(str);
}

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

function isISO31661Alpha2(str) {
	assertString(str);
	return validISO31661Alpha2CountriesCodes.includes(str.toUpperCase());
}

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
	assertString(str);
	var len = str.length;
	if (!len || len % 4 !== 0 || notBase64.test(str)) {
		return false;
	}
	var firstPaddingChar = str.indexOf('=');
	return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}

var dataURI = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i; // eslint-disable-line max-len

function isDataURI(str) {
	assertString(str);
	return dataURI.test(str);
}

var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

var isLatLong = function isLatLong(str) {
	assertString(str);
	if (!str.includes(',')) return false;
	var pair = str.split(',');
	return lat.test(pair[0]) && long.test(pair[1]);
};

// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;

var patterns = {
	AT: fourDigit,
	AU: fourDigit,
	BE: fourDigit,
	CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
	CH: fourDigit,
	CZ: /^\d{3}\s?\d{2}$/,
	DE: fiveDigit,
	DK: fourDigit,
	DZ: fiveDigit,
	ES: fiveDigit,
	FI: fiveDigit,
	FR: /^\d{2}\s?\d{3}$/,
	GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
	GR: /^\d{3}\s?\d{2}$/,
	IL: fiveDigit,
	IN: sixDigit,
	IS: threeDigit,
	IT: fiveDigit,
	JP: /^\d{3}\-\d{4}$/,
	KE: fiveDigit,
	LI: /^(948[5-9]|949[0-7])$/,
	MX: fiveDigit,
	NL: /^\d{4}\s?[a-z]{2}$/i,
	NO: fourDigit,
	PL: /^\d{2}\-\d{3}$/,
	PT: /^\d{4}(\-\d{3})?$/,
	RO: sixDigit,
	RU: sixDigit,
	SA: fiveDigit,
	SE: /^\d{3}\s?\d{2}$/,
	TW: /^\d{3}(\d{2})?$/,
	US: /^\d{5}(-\d{4})?$/,
	ZA: fourDigit,
	ZM: fiveDigit
};

var isPostalCode = function isPostalCode(str, locale) {
	assertString(str);
	if (locale in patterns) {
		return patterns[locale].test(str);
	} else if (locale === 'any') {
		for (var key in patterns) {
			if (patterns.hasOwnProperty(key)) {
				var pattern = patterns[key];
				if (pattern.test(str)) {
					return true;
				}
			}
		}
		return false;
	}
	throw new Error('Invalid locale \'' + locale + '\'');
};

function ltrim(str, chars) {
	assertString(str);
	var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
	return str.replace(pattern, '');
}

function rtrim(str, chars) {
	assertString(str);
	var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

	var idx = str.length - 1;
	while (idx >= 0 && pattern.test(str[idx])) {
		idx--;
	}

	return idx < str.length ? str.substr(0, idx + 1) : str;
}

function trim(str, chars) {
	return rtrim(ltrim(str, chars), chars);
}

function escape(str) {
	assertString(str);
	return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}

function unescape(str) {
	assertString(str);
	return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
}

function blacklist$1(str, chars) {
	assertString(str);
	return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
}

function stripLow(str, keep_new_lines) {
	assertString(str);
	var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
	return blacklist$1(str, chars);
}

function whitelist(str, chars) {
	assertString(str);
	return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
}

function isWhitelisted(str, chars) {
	assertString(str);
	for (var i = str.length - 1; i >= 0; i--) {
		if (chars.indexOf(str[i]) === -1) {
			return false;
		}
	}
	return true;
}

var default_normalize_email_options = {
	// The following options apply to all email addresses
	// Lowercases the local part of the email address.
	// Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
	// The domain is always lowercased, as per RFC 1035
	all_lowercase: true,

	// The following conversions are specific to GMail
	// Lowercases the local part of the GMail address (known to be case-insensitive)
	gmail_lowercase: true,
	// Removes dots from the local part of the email address, as that's ignored by GMail
	gmail_remove_dots: true,
	// Removes the subaddress (e.g. "+foo") from the email address
	gmail_remove_subaddress: true,
	// Conversts the googlemail.com domain to gmail.com
	gmail_convert_googlemaildotcom: true,

	// The following conversions are specific to Outlook.com / Windows Live / Hotmail
	// Lowercases the local part of the Outlook.com address (known to be case-insensitive)
	outlookdotcom_lowercase: true,
	// Removes the subaddress (e.g. "+foo") from the email address
	outlookdotcom_remove_subaddress: true,

	// The following conversions are specific to Yahoo
	// Lowercases the local part of the Yahoo address (known to be case-insensitive)
	yahoo_lowercase: true,
	// Removes the subaddress (e.g. "-foo") from the email address
	yahoo_remove_subaddress: true,

	// The following conversions are specific to iCloud
	// Lowercases the local part of the iCloud address (known to be case-insensitive)
	icloud_lowercase: true,
	// Removes the subaddress (e.g. "+foo") from the email address
	icloud_remove_subaddress: true
};

// List of domains used by iCloud
var icloud_domains = ['icloud.com', 'me.com'];

// List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com'];

// List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com'];

function normalizeEmail(email, options) {
	options = merge(options, default_normalize_email_options);

	var raw_parts = email.split('@');
	var domain = raw_parts.pop();
	var user = raw_parts.join('@');
	var parts = [user, domain];

	// The domain is always lowercased, as it's case-insensitive per RFC 1035
	parts[1] = parts[1].toLowerCase();

	if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
		// Address is GMail
		if (options.gmail_remove_subaddress) {
			parts[0] = parts[0].split('+')[0];
		}
		if (options.gmail_remove_dots) {
			parts[0] = parts[0].replace(/\./g, '');
		}
		if (!parts[0].length) {
			return false;
		}
		if (options.all_lowercase || options.gmail_lowercase) {
			parts[0] = parts[0].toLowerCase();
		}
		parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
	} else if (~icloud_domains.indexOf(parts[1])) {
		// Address is iCloud
		if (options.icloud_remove_subaddress) {
			parts[0] = parts[0].split('+')[0];
		}
		if (!parts[0].length) {
			return false;
		}
		if (options.all_lowercase || options.icloud_lowercase) {
			parts[0] = parts[0].toLowerCase();
		}
	} else if (~outlookdotcom_domains.indexOf(parts[1])) {
		// Address is Outlook.com
		if (options.outlookdotcom_remove_subaddress) {
			parts[0] = parts[0].split('+')[0];
		}
		if (!parts[0].length) {
			return false;
		}
		if (options.all_lowercase || options.outlookdotcom_lowercase) {
			parts[0] = parts[0].toLowerCase();
		}
	} else if (~yahoo_domains.indexOf(parts[1])) {
		// Address is Yahoo
		if (options.yahoo_remove_subaddress) {
			var components = parts[0].split('-');
			parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
		}
		if (!parts[0].length) {
			return false;
		}
		if (options.all_lowercase || options.yahoo_lowercase) {
			parts[0] = parts[0].toLowerCase();
		}
	} else if (options.all_lowercase) {
		// Any other address
		parts[0] = parts[0].toLowerCase();
	}
	return parts.join('@');
}

var version = '9.1.1';

//身份证号合法性验证
//支持15位和18位身份证号
//支持地址编码、出生日期、校验位验证
function isIdCard(code) {
	var city = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江 ",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北 ",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏 ",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外 "
	};
	var pass = true;

	if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
		pass = false;
	} else if (!city[code.substr(0, 2)]) {
		pass = false;
	}
	return pass;
}

function isString(val) {
	return typeof val === 'string' || val instanceof String;
}

function isArray(val) {
	return val instanceof Array || !(val instanceof Object) && Object.prototype.toString.call(val) === '[object Array]' || typeof val.length === 'number' && typeof val.splice !== 'undefined' && typeof val.propertyIsEnumerable !== 'undefined' && !val.propertyIsEnumerable('splice');
}

function isNumber(val) {
	return typeof val === 'number';
}

function isDate(val) {
	return (typeof val === 'undefined' ? 'undefined' : _typeof$1(val)) === 'object' && val instanceof Date;
}

function isUndefined(val) {
	return typeof val === 'undefined';
}

function isObject(val) {
	return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof$1(val)) === 'object';
}

function isFunction(val) {
	return typeof val === 'function';
}

function isFormData(val) {
	return typeof FormData !== 'undefined' && val instanceof FormData;
}

function isURLSearchParams(val) {
	return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

var validator = {
	version: version,
	toDate: toDate,
	toFloat: toFloat,
	toInt: toInt,
	toBoolean: toBoolean,
	equals: equals,
	contains: contains,
	matches: matches,
	isEmail: isEmail,
	isURL: isURL,
	isMACAddress: isMACAddress,
	isIP: isIP,
	isFQDN: isFQDN,
	isBoolean: isBoolean,
	isAlpha: isAlpha,
	isAlphanumeric: isAlphanumeric,
	isNumeric: isNumeric,
	isPort: isPort,
	isLowercase: isLowercase,
	isUppercase: isUppercase,
	isAscii: isAscii,
	isFullWidth: isFullWidth,
	isHalfWidth: isHalfWidth,
	isVariableWidth: isVariableWidth,
	isMultibyte: isMultibyte,
	isSurrogatePair: isSurrogatePair,
	isInt: isInt,
	isFloat: isFloat,
	isDecimal: isDecimal,
	isHexadecimal: isHexadecimal,
	isDivisibleBy: isDivisibleBy,
	isHexColor: isHexColor,
	isISRC: isISRC,
	isMD5: isMD5,
	isHash: isHash,
	isJSON: isJSON,
	isEmpty: isEmpty,
	isLength: isLength,
	isByteLength: isByteLength,
	isUUID: isUUID,
	isMongoId: isMongoId,
	isAfter: isAfter,
	isBefore: isBefore,
	isIn: isIn,
	isCreditCard: isCreditCard,
	isISIN: isISIN,
	isISBN: isISBN,
	isISSN: isISSN,
	isMobilePhone: isMobilePhone,
	isPostalCode: isPostalCode,
	isCurrency: isCurrency,
	isISO8601: isISO8601,
	isISO31661Alpha2: isISO31661Alpha2,
	isBase64: isBase64,
	isDataURI: isDataURI,
	isLatLong: isLatLong,
	ltrim: ltrim,
	rtrim: rtrim,
	trim: trim,
	escape: escape,
	unescape: unescape,
	stripLow: stripLow,
	whitelist: whitelist,
	blacklist: blacklist$1,
	isWhitelisted: isWhitelisted,
	normalizeEmail: normalizeEmail,
	toString: toString,

	// new
	isIdCard: isIdCard,
	isString: isString,
	isNumber: isNumber,
	isDate: isDate,
	isArray: isArray,
	isObject: isObject,
	isUndefined: isUndefined,
	isFunction: isFunction,
	isFormData: isFormData,
	isURLSearchParams: isURLSearchParams
};

/* eslint-disable no-unused-vars,init-declarations,no-undefined,no-shadow,prefer-template,no-var,no-underscore-dangle,vars-on-top,no-proto,object-shorthand,prefer-arrow-callback,guard-for-in,max-len */

/*!
 * storejs v1.0.16
 * Local storage localstorage package provides a simple API
 *
 * Copyright (c) 2017 kenny wang <wowohoo@qq.com>
 * https://github.com/jaywcjlove/store.js
 *
 * Licensed under the MIT license.
 */

function isJSON$1(obj) {
	return (typeof obj === "undefined" ? "undefined" : _typeof$1(obj)) === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
}

function stringify(val) {
	return val === undefined || typeof val === "function" ? val + "" : JSON.stringify(val);
}

function deserialize(value) {
	if (typeof value !== "string") {
		return undefined;
	}
	try {
		return JSON.parse(value);
	} catch (e) {
		return value || undefined;
	}
}

function isFunction$1(value) {
	return {}.toString.call(value) === "[object Function]";
}

function dealIncognito(storage) {
	var _KEY = "_Is_Incognit",
	    _VALUE = "yes";
	try {
		storage.setItem(_KEY, _VALUE);
	} catch (e) {
		if (e.name === "QuotaExceededError") {
			var _nothing = function _nothing() {};
			storage.__proto__ = {
				setItem: _nothing,
				getItem: _nothing,
				removeItem: _nothing,
				clear: _nothing
			};
		}
	} finally {
		if (storage.getItem(_KEY) === _VALUE) storage.removeItem(_KEY);
	}
	return storage;
}

function Store(provider) {
	if (!provider) return;

	this.storage = provider;
	this.store = null;
	this._api = null;
	this.even_storage = function () {};

	// deal QuotaExceededError if user use incognito mode in browser
	this.storage = dealIncognito(this.storage);
}

Store.prototype = {
	set: function set$$1(key, val) {
		this.even_storage("set", key, val);
		if (key && !isJSON$1(key)) {
			this.storage.setItem(key, stringify(val));
		} else if (key && isJSON$1(key) && !val) {
			for (var a in key) {
				this.set(a, key[a]);
			}
		}
		return this;
	},
	get: function get$$1(key) {
		if (!key) {
			var ret = {};
			this.forEach(function (key, val) {
				ret[key] = val;
			});
			return ret;
		}
		if (key.charAt(0) === "?") {
			return this.has(key.substr(1));
		}
		return deserialize(this.storage.getItem(key));
	},
	clear: function clear() {
		this.forEach(function (key, val) {
			this.even_storage("clear", key, val);
		});
		this.storage.clear();
		return this;
	},
	remove: function remove(key) {
		var val = this.get(key);
		this.storage.removeItem(key);
		this.even_storage("remove", key, val);
		return val;
	},
	has: function has(key) {
		return {}.hasOwnProperty.call(this.get(), key);
	},
	keys: function keys() {
		var d = [];
		this.forEach(function (k, list) {
			d.push(k);
		});
		return d;
	},
	size: function size() {
		return this.keys().length;
	},
	forEach: function forEach(callback) {
		for (var i = 0; i < this.storage.length; i++) {
			var key = this.storage.key(i);
			if (callback(key, this.get(key)) === false) break;
		}
		return this;
	},
	search: function search(str) {
		var arr = this.keys(),
		    dt = {};
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].indexOf(str) > -1) dt[arr[i]] = this.get(arr[i]);
		}
		return dt;
	},
	onStorage: function onStorage(cb) {
		if (cb && isFunction$1(cb)) this.even_storage = cb;
		return this;
	}
};

/**
 * sessionStore
 */
var sessionStore = new Store(window.sessionStorage);

/**
 * localStore
 */
var localStore = new Store(window.localStorage);

/**
 * 正则表达式的几种用法
 */
var regexp = {
	test: function test(str, reg) {
		return reg.test(str);
	},
	search: function search(str, reg) {
		return str.search(reg);
	},
	match: function match(str, reg) {
		return str.match(reg);
	},
	split: function split(str, reg) {
		return str.split(reg);
	},
	replace: function replace(str, reg, rep) {
		return str.replace(reg, rep);
	}
};

var u = navigator.userAgent; //取得浏览器的userAgent字符串
var p = navigator.platform; // 取得平台字符串

var isOpera = u.indexOf("Opera") > -1; //判断是否Opera浏览器
var isIE = u.indexOf("compatible") > -1 && u.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
var isEdge = u.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
var isFirefox = u.indexOf("Firefox") > -1; //判断是否Firefox浏览器
var isSafari = u.indexOf("Safari") > -1 && u.indexOf("Chrome") === -1; //判断是否Safari浏览器
var isChrome = u.indexOf("Chrome") > -1 && u.indexOf("Safari") > -1; //判断Chrome浏览器

var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

var isIPhone = u.indexOf('iPhone') > -1;
var isIPad = u.indexOf('iPad') > -1;
var isIPod = u.indexOf('iPod') > -1;
var isWindowsPhone = u.indexOf('Windows Phone') > -1;
var isSymbianOS = u.indexOf('SymbianOS') > -1;

var isWeiXin = u.toLowerCase().indexOf('micromessenger') !== -1; //是否在微信中打开
var isQQ = u.match(/\sQQ/i) === " qq"; //是否QQ

var IsPC = !(isAndroid || isIPhone || isIPad || isIPod || isSymbianOS || isWindowsPhone);

var isTrident = u.indexOf('Trident') > -1; //IE内核
var isPresto = u.indexOf('Presto') > -1; //opera内核
var isWebKit = u.indexOf('AppleWebKit') > -1; //苹果、谷歌内核
var isGecko = u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1; //火狐内核
var isMobile = !!u.match(/AppleWebKit.*Mobile.*/); //是否为移动终端

var isWebApp = u.indexOf('Safari') === -1; //是否web应该程序，没有头部与底部


var isWin = p === "Win32" || p === "Windows";
var isMac = p === "Mac68K" || p === "MacPPC" || p === "Macintosh" || p === "MacIntel";
var isLinux = p.indexOf("Linux") > -1;

var name = function () {
	if (isAndroid) {
		return 'android';
	} else if (isIOS) {
		return "ios";
	} else if (isLinux) {
		return "linux";
	} else if (isWin) {
		return "windows";
	} else if (isMac) {
		return "mac";
	}
	return "unknown";
}();

var browser = function () {
	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(u);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion === 7) {
			return "IE7";
		} else if (fIEVersion === 8) {
			return "IE8";
		} else if (fIEVersion === 9) {
			return "IE9";
		} else if (fIEVersion === 10) {
			return "IE10";
		} else if (fIEVersion === 11) {
			return "IE11";
		}
		//IE版本过低
		return "0";
	}

	if (isFirefox) {
		return "Firefox";
	}
	if (isOpera) {
		return "Opera";
	}
	if (isSafari) {
		return "Safari";
	}
	if (isChrome) {
		return "Chrome";
	}
	if (isEdge) {
		return "Edge";
	}
	//未知浏览器
	return null;
}();

var platform = {

	isOpera: isOpera,
	isIE: isIE,
	isEdge: isEdge,
	isFirefox: isFirefox,
	isSafari: isSafari,
	isChrome: isChrome,

	isAndroid: isAndroid,
	isIOS: isIOS,

	isIPhone: isIPhone,
	isIPad: isIPad,
	isIPod: isIPod,
	isWindowsPhone: isWindowsPhone,
	isSymbianOS: isSymbianOS,

	IsPC: IsPC,

	isWeiXin: isWeiXin,
	isQQ: isQQ,

	isWebApp: isWebApp,

	isTrident: isTrident,
	isPresto: isPresto,
	isWebKit: isWebKit,
	isGecko: isGecko,
	isMobile: isMobile,

	isWin: isWin,
	isMac: isMac,
	isLinux: isLinux,

	name: name,

	browser: browser
};

/**
 * network request
 */
var request = {
	get: function get(url, params) {
		params = params || {};

		console.log('==============================================');
		console.log('Get:' + url);
		console.log('Params:', params);

		return new Promise(function (resolve, reject) {
			$.ajax({
				type: 'GET',
				url: url,
				data: params,
				cache: false,
				dataType: 'json',
				success: function success(result) {
					console.log('Result:', result);
					resolve(result);
				},
				error: function error(XMLHttpRequest, textStatus, errorThrown) {
					console.log('Error:', XMLHttpRequest, textStatus, errorThrown);
					reject(XMLHttpRequest);
				}
			});
		});
	},
	post: function post(url, params) {
		params = params || {};

		console.log('==============================================');
		console.log('Post:', url);
		console.log('Data:', params);

		return new Promise(function (resolve, reject) {
			$.ajax({
				type: 'POST',
				url: url,
				data: params,
				cache: false,
				dataType: 'json',
				success: function success(result) {
					console.log('Result:', result);
					resolve(result);
				},
				error: function error(XMLHttpRequest, textStatus, errorThrown) {
					console.log('Error:', XMLHttpRequest, textStatus, errorThrown);
					reject(XMLHttpRequest);
				}
			});
		});
	}
};

/* eslint-disable no-undef,valid-jsdoc,spaced-comment,quote-props,comma-dangle,curly,prefer-template,eqeqeq,max-len */
var utils = {

	// 将 Date 转化为指定格式的String
	// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
	// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
	// 例子：
	// utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
	// utils.formatDate(new Date(), "yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
	formatDate: function formatDate(date, fmt) {
		// 默认格式
		fmt = fmt || 'yyyy-MM-dd';
		date = validator.isDate(date) ? date : new Date(date);

		var o = {
			"M+": date.getMonth() + 1, //月份
			"d+": date.getDate(), //日
			"h+": date.getHours(), //小时
			"m+": date.getMinutes(), //分
			"s+": date.getSeconds(), //秒
			"q+": Math.floor((date.getMonth() + 3) / 3), //季度
			"S": date.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}return fmt;
	},


	/**
  * 获得window大小
  */
	getWindowSize: function getWindowSize() {
		var winWidth = 0,
		    winHeight = 0;
		// 获取窗口宽度
		if (window.innerWidth) winWidth = window.innerWidth;else if (document.body && document.body.clientWidth) winWidth = document.body.clientWidth;
		// 获取窗口高度
		if (window.innerHeight) winHeight = window.innerHeight;else if (document.body && document.body.clientHeight) winHeight = document.body.clientHeight;
		// 通过深入 Document 内部对 body 进行检测，获取窗口大小
		if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
			winHeight = document.documentElement.clientHeight;
			winWidth = document.documentElement.clientWidth;
		}

		return {
			width: winWidth,
			height: winHeight
		};
	}
};

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
var YEAR_SIZE = DAY_SIZE * 365.2425; // average year size

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

var dateUtils = {
	//
	lang: { 'en': {} },

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
			parse: function parse(str) {
				var b = str.split(/[T ]/);
				var date = dateUtils.parsers.date.parse(b[0]);
				var m = b[1].replace(/:/g, '').match(/^(\d\d)(\d\d)?(\d\d)?(?:[.,](\d+))?([+\-](?:\d\d){1,2})?/);
				// TODO: timezone (I have no need for this feature yet)
				// if ( m[5] ) { var zone = m[5] || '0000'; }
				var fs = 0,
				    t = date.getTime() + parseInt(m[1], 10) * HOUR_SIZE + parseInt(m[2] || '0', 10) * MINUTE_SIZE + parseInt(m[3] || '0', 10) * SECOND_SIZE;
				if (m[3]) {
					fs = SECOND_SIZE;
				} else if (m[2]) {
					fs = MINUTE_SIZE;
				} else if (m[1]) {
					fs = HOUR_SIZE;
				}
				t += parseFloat('0.' + (m[4] || '0')) * fs;
				date.setTime(t);
				date.size = 0;
				return date;
			}
		},

		// year + month + day
		date: {
			test: /^(?:[+\-]\d{6}|\d{4})(?:\-\d\d\-\d\d|\-?\d\d\d\d)$/,
			size: DAY_SIZE,
			parse: function parse(str) {
				var m = /^([+\-]\d{6}|\d{4})\-?(\d\d)\-?(\d\d)$/.exec(str),
				    d = dateUtils.date(m[1], +m[2] - 1, m[3]);
				d.size = DAY_SIZE;
				return d;
			}
		},

		// year + month
		year_and_month: {
			test: /^[+\-]?\d{4,6}[\/\-](?:0[1-9]|1[012])$/,
			size: MONTH_SIZE,
			parse: function parse(str) {
				var b = str.split(/[\/\-]/);
				var d = dateUtils.date(b[0], +b[1] - 1, 1);
				d.size = dateUtils.daysInMonth(d) * DAY_SIZE;
				return d;
			}
		},

		// year
		year: {
			test: /^[+\-]?\d{4,6}$/,
			size: YEAR_SIZE,
			parse: function parse(str) {
				var d = dateUtils.date(str, 0, 1);
				d.size = DAY_SIZE * (dateUtils.isLeapYear(d) ? 366 : 365);
				return d;
			}
		},

		// year + iso week + [day]
		year_and_week: {
			test: /^[+\-]?\d{4,6}\-?[Ww]\d\d(?:\-?\d)?$/,
			size: WEEK_SIZE,
			parse: function parse(str) {
				var s = str.toLowerCase().replace(/[^w\d]/g, '').split('w');
				var d = dateUtils.date(s[0], 0, 3); // Jan 3
				d.setUTCDate(3 - d.getUTCDay() + (parseInt(s[1].substr(0, 2), 10) - 1) * 7 + parseInt(s[1].substr(2, 1) || '1', 10));
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
			parse: function parse(str) {
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
			parse: function parse(str) {
				var b = str.split(/\-?[Qq]/),
				    d = dateUtils.date(b[0], (parseInt(b[1], 10) - 1) * 3);
				d.size = DAY_SIZE;
				return d;
			}
		}

	},

	formats: {
		// Lowercase Ante meridiem and Post meridiem
		a: function a(d) {
			return d.getUTCHours() >= 12 ? 'pm' : 'am';
		},
		// Uppercase Ante meridiem and Post meridiem
		A: function A(d) {
			return d.getUTCHours() >= 12 ? 'PM' : 'AM';
		},
		// ISO 8601 date
		c: function c(d, l) {
			return dateUtils.isoyear(d) + dateUtils.format(d, '-m-d\\TH:i:s.', l) + dateUtils.pad(d.getUTCMilliseconds(), 3) + 'Z';
		},
		// Day of the month, 2 digits with leading zeros
		d: function d(_d2) {
			return dateUtils.pad(_d2.getUTCDate());
		},
		// A textual representation of a day, three letters
		D: function D(d, l) {
			return dateUtils._(_d[d.getUTCDay()].substr(0, 3), l);
		},
		// Time zone identifier
		e: function e(d) {
			return 'UTC';
		},
		// A full textual representation of a month
		F: function F(d, l) {
			return dateUtils._(_m[d.getUTCMonth()], l);
		},
		// 12-hour format of an hour without leading zeros
		g: function g(d) {
			return d.getUTCHours() % 12 || 12;
		},
		// 24-hour format of an hour without leading zeros
		G: function G(d) {
			return d.getUTCHours();
		},
		// 12-hour format of an hour with leading zeros
		h: function h(d) {
			return dateUtils.pad(d.getUTCHours() % 12 || 12);
		},
		// 24-hour format of an hour with leading zeros
		H: function H(d) {
			return dateUtils.pad(d.getUTCHours());
		},
		// Minutes with leading zeros
		i: function i(d) {
			return dateUtils.pad(d.getUTCMinutes());
		},
		// Day of the month without leading zeros
		j: function j(d) {
			return d.getUTCDate();
		},
		// A full textual representation of the day of the week
		l: function l(d, _l) {
			return dateUtils._(_d[d.getUTCDay()], _l);
		},
		// Whether it's a leap year (0 = yes, 1 = no)
		L: function L(d) {
			return dateUtils.isLeapYear(d) * 1;
		},
		// Numeric representation of a month, with leading zeros
		m: function m(d) {
			return dateUtils.pad(d.getUTCMonth() + 1);
		},
		// A short textual representation of a month, three letters
		M: function M(d, l) {
			return dateUtils._(_m[d.getUTCMonth()].substr(0, 3), l);
		},
		// Numeric representation of a month, without leading zeros
		n: function n(d) {
			return d.getUTCMonth() + 1;
		},
		// ISO-8601 numeric representation of the day of the week
		N: function N(d) {
			return d.getUTCDay() || 7;
		},
		// ISO-8601 year number
		o: function o(d) {
			return dateUtils.pad(dateUtils.isocalendar(d)[0], 4);
		},
		// Time zone designator
		O: function O(d) {
			return '+0000';
		},
		// Time zone difference
		P: function P(d) {
			return '+00:00';
		},
		// Quarter of the year
		q: function q(d) {
			return ~~(d.getUTCMonth() / 3) + 1;
		},
		// RFC 2822 formatted date
		r: function r(d, l) {
			return dateUtils.format(d, 'D, d M Y H:i:s O', l);
		},
		// Seconds, with leading zeros
		s: function s(d) {
			return dateUtils.pad(d.getUTCSeconds());
		},
		// English ordinal suffix for the day of the month, 2 characters
		S: function S(d) {
			var a = d.getUTCDate() % 10,
			    b = d.getUTCDate() % 100;
			return a === 1 && b !== 11 && 'st' || a === 2 && b !== 12 && 'nd' || a === 3 && b !== 13 && 'rd' || 'th';
		},
		// Number of days in the given month
		t: function t(d) {
			return dateUtils.daysInMonth(d);
		},
		// Time zone abbreviation
		T: function T(d) {
			return 'UTC';
		},
		// Microseconds
		u: function u(d) {
			return dateUtils.pad(d.getUTCMilliseconds(), 6);
		},
		// Seconds since the Unix Epoch
		U: function U(d) {
			return ~~(d / 1000);
		},
		// Numeric representation of the day of the week
		w: function w(d) {
			return d.getUTCDay();
		},
		// ISO-8601 week number of year, weeks starting on Monday
		W: function W(d) {
			return dateUtils.pad(dateUtils.isocalendar(d)[1]);
		},
		// A short numeric representation of a year, 2 digits
		y: function y(d) {
			return (d.getUTCFullYear() + '').substr(2);
		},
		// A full numeric representation of a year, 4 digits
		Y: function Y(d) {
			return d.getUTCFullYear();
		},
		// The day of the year (starting from 0)
		z: function z(d) {
			return Math.floor((d - new Date(Date.UTC(d.getUTCFullYear(), 0, 1))) / DAY_SIZE);
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
	_: function _(s, lang) {
		var l = lang && this.lang[lang];
		return l && s in l ? l[s] : s;
	},
	now: function now() {
		return typeof Date.now === 'function' ? Date.now() : +new Date();
	},


	// return a Date object for the current date (0 time)
	today: function today() {
		return this.set(this.date(), {
			hour: 0, minute: 0, second: 0, millisecond: 0
		});
	},

	// parse a date
	parse: function parse(str) {
		var d;
		if (typeof str !== 'string') {
			throw new Error("dateutil parser can't parse non-strings.");
		}
		for (var dtype in dateUtils.parsers) {
			if (dateUtils.parsers[dtype].test.test(str)) {
				d = dateUtils.parsers[dtype].parse(str);
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
	format: function format(d) {
		var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dateUtils.ymd_;
		var lang = arguments[2];


		// has been moved to the Date prototype?
		if (_toString.call(this) === '[object Date]') {
			lang = fmt;
			fmt = d;
			d = this;
		} else if (_toString.call(d) !== '[object Date]') {
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
				r.push(c in dateUtils.formats ? dateUtils.formats[c](d, lang) : c);
			}
			// escaped characters & unreconized characters
			else {
					c = i < fmt.length ? fmt.charAt(++i) : c;
					r.push(c);
				}
		}
		return r.join('');
	},
	date: function date(y, m, d, h, n, s, ms) {
		if (!arguments.length) {
			return new Date(this.now());
		}
		y = parseInt(y || 0, 10);
		if (arguments.length === 1) {
			return new Date(y);
		}
		var ts = Date.UTC(y, parseInt(m || 0, 10), parseInt(d || 1, 10), parseInt(h || 0, 10), parseInt(n || 0, 10), parseInt(s || 0, 10), parseInt(ms || 0, 10));
		var d = new Date(ts);
		if (y < 100 && y >= 0) {
			// JS date ranges 0-99 are interpreted by Date.UTC as 1900-1999
			d.setUTCFullYear(y);
		}
		return d;
	},


	// zero pad a string n to l places
	pad: function pad(n, l) {
		var s = this.pad.z;
		if (!s) {
			// This mess is here because JSlint breaks on new Array(999)
			var a = [];
			a[999] = '';
			s = this.pad.z = a.join('0');
		}
		s += n;
		return s.substring(s.length - (l || 2));
	},


	// is a given year a leap year
	isLeapYear: function isLeapYear(y) {
		if (_toString.call(y) === '[object Date]') {
			y = y.getUTCFullYear();
		}
		return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
	},


	// return the number of days in a date's month
	daysInMonth: function daysInMonth(dt) {
		var m = dt.getUTCMonth();
		if (m === 1) {
			return this.isLeapYear(dt) ? 29 : 28;
		}
		return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m];
	},


	// return a 3-tuple, (ISO year, ISO week number, ISO weekday).
	isocalendar: function isocalendar(dt) {
		var d = dt.getUTCDay();
		var t = new Date(dt.valueOf());
		t.setDate(t.getDate() - (d + 6) % 7 + 3);
		var iso_year = t.getUTCFullYear();
		var w = Math.floor((t.getTime() - this.date(iso_year, 0, 1, -6)) / 86400000);
		return [iso_year, 1 + Math.floor(w / 7), d || 7];
	},
	isoyear: function isoyear(dt) {
		var y = dt.getUTCFullYear();
		if (y >= 0 && y <= 9999) {
			return this.pad(Math.abs(y), 4);
		}
		return (y < 0 ? '-' : '+') + this.pad(Math.abs(y), 6);
	},


	// Allow setting multiple properties at once using object notation:
	// `mydate.set({ hour: 8, minute: 12, second: 0 });`
	set: function set$$1(dt, values) {
		if ((typeof values === 'undefined' ? 'undefined' : _typeof$1(values)) === 'object') {
			var s = [],
			    n,
			    i;
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
	}
};

var urlUtils = {

	href: location.href,
	hash: location.hash,
	host: location.host,
	hostname: location.hostname,
	origin: location.origin,
	pathname: location.pathname,
	port: location.port,
	protocol: location.protocol,
	search: location.search,

	/**
  * 基础URL,无查询参数，无哈希
  */
	baseUrl: location.origin + location.pathname,

	reload: function reload() {
		location.reload();
	},
	repair: function repair() {
		// 解决app端
		var url = location.href,
		    urls = url.split('?');
		if (urls.length === 3) {
			url = urls[0] + '?' + urls[1] + '&' + urls[2];
			location.href = url;
		}
	},
	getParam: function getParam(name) {
		return this.getParams()[name];
	},
	getParams: function getParams() {
		var params = {};

		var url = location.href; //获取url中"?"符后的字串
		var match = url.match(/\w+=\w*/g);
		if (match) {
			match.forEach(function (a) {
				var as = a.split('=');
				params[as[0]] = decodeURIComponent(as[1]);
			});
		}
		return params;
	},
	setParams: function setParams(params) {
		var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		var params2 = urlUtils.getParams();

		if (replace) {
			params2 = {};
		}
		Object.keys(params).forEach(function (key) {
			params2[key] = params[key];
		});

		location.href = this.baseUrl + '?' + this.toQueryString(params2);
	},


	/**
  * json转QueryString
  */
	toQueryString: function toQueryString(params) {
		var paramsArray = [];
		Object.keys(params).forEach(function (key) {
			paramsArray.push(key + '=' + encodeURIComponent(params[key]));
		});
		return paramsArray.join('&');
	}
};

var jeselvmo = {
	validator: validator,
	platform: platform,
	localStore: localStore,
	sessionStore: sessionStore,
	request: request,
	regexp: regexp,
	utils: utils,
	dateUtils: dateUtils,
	urlUtils: urlUtils
};

return jeselvmo;

})));
