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
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.jeselvmo = factory());
}(this, (function () { 'use strict';

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

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

/* eslint-disable no-undef */
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

/* eslint-disable curly */

var dateUtils = {

	F_DATE: 'yyyyMMdd',
	F_DATE_2: 'yyyy-MM-dd',
	F_TIME: 'HHmmss',
	F_TIME_2: 'HH:mm:ss',
	F_DATETIME: 'yyyyMMddHHmmss',
	F_DATETIME_2: 'yyyy-MM-dd HH:mm:ss',

	format: function format(date) {
		var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dateUtils.F_DATE_2;


		if (typeof date === 'string' || typeof date === 'number') {
			date = new Date(date);
		}

		var o = {
			"M+": date.getMonth() + 1, //月份
			"d+": date.getDate(), //日
			"H+": date.getHours(), //小时
			"m+": date.getMinutes(), //分
			"s+": date.getSeconds(), //秒
			"q+": Math.floor((date.getMonth() + 3) / 3), //季度
			"S+": date.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}return fmt;
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

var pinyinDict = {
	"èr": "二贰",
	"shí": "十时实蚀",
	"yǐ": "乙已以蚁倚",
	"yī": "一衣医依伊揖壹",
	"chǎng,ān,hàn": "厂",
	"dīng,zhēng": "丁",
	"qī": "七戚欺漆柒凄嘁",
	"bǔ,bo": "卜",
	"rén": "人仁",
	"rù": "入褥",
	"jiǔ": "九久酒玖灸韭",
	"ér": "儿而",
	"bā": "八巴疤叭芭捌笆",
	"jǐ,jī": "几",
	"le,liǎo": "了",
	"lì": "力历厉立励利例栗粒吏沥荔俐莉砾雳痢",
	"dāo": "刀",
	"nǎi": "乃奶",
	"sān": "三叁",
	"yòu": "又右幼诱佑",
	"yú": "于余鱼娱渔榆愚隅逾舆",
	"shì": "士示世市式势事侍饰试视柿是适室逝释誓拭恃嗜",
	"gān,gàn": "干",
	"gōng": "工弓公功攻宫恭躬",
	"kuī": "亏盔窥",
	"tǔ": "土",
	"cùn": "寸",
	"dà,dài,tài": "大",
	"cái": "才材财裁",
	"xià": "下夏",
	"zhàng": "丈仗帐胀障杖账",
	"yǔ,yù,yú": "与",
	"shàng,shǎng": "上",
	"wàn,mò": "万",
	"kǒu": "口",
	"xiǎo": "小晓",
	"jīn": "巾斤今金津筋襟",
	"shān": "山删衫珊",
	"qiān": "千迁牵谦签",
	"qǐ": "乞企启起",
	"chuān": "川穿",
	"gè,gě": "个各",
	"sháo": "勺芍",
	"yì": "亿义艺忆议亦异役译易疫益谊意毅翼屹抑邑绎奕逸肄溢",
	"jí": "及吉级极即急疾集籍棘辑嫉",
	"fán": "凡烦矾樊",
	"xī": "夕西吸希析牺息悉惜稀锡溪熄膝昔晰犀熙嬉蟋",
	"wán": "丸完玩顽",
	"me,mó,ma,yāo": "么",
	"guǎng,ān": "广",
	"wáng,wú": "亡",
	"mén": "门们",
	"shī": "尸失师诗狮施湿虱",
	"zhī": "之支汁芝肢脂蜘",
	"jǐ": "己挤脊",
	"zǐ": "子紫姊籽滓",
	"wèi": "卫未位味畏胃喂慰谓猬蔚魏",
	"yě": "也冶野",
	"nǚ,rǔ": "女",
	"rèn": "刃认韧纫",
	"fēi": "飞非啡",
	"xí": "习席袭媳",
	"mǎ": "马码玛",
	"chā,chá,chǎ": "叉",
	"fēng": "丰封疯峰锋蜂枫",
	"xiāng": "乡香箱厢湘镶",
	"jǐng": "井警阱",
	"wáng,wàng": "王",
	"kāi": "开揩",
	"tiān": "天添",
	"wú": "无吴芜梧蜈",
	"fū,fú": "夫",
	"zhuān": "专砖",
	"yuán": "元园原圆援缘源袁猿辕",
	"yún": "云匀耘",
	"zhā,zā,zhá": "扎",
	"mù": "木目牧墓幕暮慕沐募睦穆",
	"wǔ": "五午伍武侮舞捂鹉",
	"tīng": "厅听",
	"bù,fǒu": "不",
	"qū,ōu": "区",
	"quǎn": "犬",
	"tài": "太态泰汰",
	"yǒu": "友",
	"chē,jū": "车",
	"pǐ": "匹",
	"yóu": "尤由邮犹油游",
	"jù": "巨拒具俱剧距惧锯聚炬",
	"yá": "牙芽崖蚜涯衙",
	"bǐ": "比彼笔鄙匕秕",
	"jiē": "皆阶接街秸",
	"hù": "互户护沪",
	"qiè,qiē": "切",
	"wǎ,wà": "瓦",
	"zhǐ": "止旨址纸指趾",
	"tún,zhūn": "屯",
	"shǎo,shào": "少",
	"rì": "日",
	"zhōng,zhòng": "中",
	"gāng": "冈刚纲缸肛",
	"nèi,nà": "内",
	"bèi": "贝备倍辈狈惫焙",
	"shuǐ": "水",
	"jiàn,xiàn": "见",
	"niú": "牛",
	"shǒu": "手守首",
	"máo": "毛矛茅锚",
	"qì": "气弃汽器迄泣",
	"shēng": "升生声牲笙甥",
	"cháng,zhǎng": "长",
	"shén,shí": "什",
	"piàn,piān": "片",
	"pú,pū": "仆",
	"huà,huā": "化",
	"bì": "币必毕闭毙碧蔽弊避壁庇蓖痹璧",
	"chóu,qiú": "仇",
	"zhuǎ,zhǎo": "爪",
	"jǐn,jìn": "仅",
	"réng": "仍",
	"fù,fǔ": "父",
	"cóng,zòng": "从",
	"fǎn": "反返",
	"jiè": "介戒届界借诫",
	"xiōng": "凶兄胸匈汹",
	"fēn,fèn": "分",
	"fá": "乏伐罚阀筏",
	"cāng": "仓苍舱沧",
	"yuè": "月阅悦跃越岳粤",
	"shì,zhī": "氏",
	"wù": "勿务物误悟雾坞晤",
	"qiàn": "欠歉",
	"fēng,fěng": "风",
	"dān": "丹耽",
	"wū": "乌污呜屋巫诬",
	"fèng": "凤奉",
	"gōu,gòu": "勾",
	"wén": "文闻蚊",
	"liù,lù": "六",
	"huǒ": "火伙",
	"fāng": "方芳",
	"dǒu,dòu": "斗",
	"wèi,wéi": "为",
	"dìng": "订定锭",
	"jì": "计记技忌际季剂迹既继寄绩妓荠寂鲫冀",
	"xīn": "心辛欣新薪锌",
	"chǐ,chě": "尺",
	"yǐn": "引饮蚓瘾",
	"chǒu": "丑",
	"kǒng": "孔恐",
	"duì": "队对",
	"bàn": "办半扮伴瓣绊",
	"yǔ,yú": "予",
	"yǔn": "允陨",
	"quàn": "劝",
	"shū": "书叔殊梳舒疏输蔬抒枢淑",
	"shuāng": "双霜",
	"yù": "玉育狱浴预域欲遇御裕愈誉芋郁喻寓豫",
	"huàn": "幻换唤患宦涣焕痪",
	"kān": "刊堪勘",
	"mò": "末沫漠墨默茉陌寞",
	"jī": "击饥圾机肌鸡积基激讥叽唧畸箕",
	"dǎ,dá": "打",
	"qiǎo": "巧",
	"zhèng,zhēng": "正症挣",
	"pū": "扑",
	"bā,pá": "扒",
	"gān": "甘肝竿柑",
	"qù": "去",
	"rēng": "扔",
	"gǔ": "古谷股鼓",
	"běn": "本",
	"jié,jiē": "节结",
	"shù,shú,zhú": "术",
	"bǐng": "丙柄饼秉禀",
	"kě,kè": "可",
	"zuǒ": "左",
	"bù": "布步怖部埠",
	"shí,dàn": "石",
	"lóng": "龙聋隆咙胧窿",
	"yà": "轧亚讶",
	"miè": "灭蔑",
	"píng": "平评凭瓶萍坪",
	"dōng": "东冬",
	"kǎ,qiǎ": "卡",
	"běi,bèi": "北",
	"yè": "业页夜液谒腋",
	"jiù": "旧救就舅臼疚",
	"shuài": "帅蟀",
	"guī": "归规闺硅瑰",
	"zhàn,zhān": "占",
	"dàn": "旦但诞淡蛋氮",
	"qiě,jū": "且",
	"yè,xié": "叶",
	"jiǎ": "甲钾",
	"dīng": "叮盯",
	"shēn": "申伸身深呻绅",
	"hào,háo": "号",
	"diàn": "电店垫殿玷淀惦奠",
	"tián": "田甜恬",
	"shǐ": "史使始驶矢屎",
	"zhī,zhǐ": "只",
	"yāng": "央殃秧鸯",
	"diāo": "叼雕刁碉",
	"jiào": "叫轿较窖酵",
	"lìng": "另",
	"dāo,tāo": "叨",
	"sì": "四寺饲肆",
	"tàn": "叹炭探碳",
	"qiū": "丘秋蚯",
	"hé": "禾河荷盒",
	"fù": "付负妇附咐赴复傅富腹覆赋缚",
	"dài": "代带贷怠袋逮戴",
	"xiān": "仙先掀锨",
	"yí": "仪宜姨移遗夷胰",
	"bái": "白",
	"zǎi,zǐ,zī": "仔",
	"chì": "斥赤翅",
	"tā": "他它塌",
	"guā": "瓜刮",
	"hū": "乎呼忽",
	"cóng": "丛",
	"lìng,líng,lǐng": "令",
	"yòng": "用",
	"shuǎi": "甩",
	"yìn": "印",
	"lè,yuè": "乐",
	"jù,gōu": "句",
	"cōng": "匆葱聪囱",
	"fàn": "犯饭泛范贩",
	"cè": "册厕测策",
	"wài": "外",
	"chù,chǔ": "处",
	"niǎo": "鸟",
	"bāo": "包胞苞褒",
	"zhǔ": "主煮嘱拄",
	"shǎn": "闪陕",
	"lán": "兰拦栏蓝篮澜",
	"tóu,tou": "头",
	"huì": "汇绘贿惠慧讳诲晦秽",
	"hàn": "汉旱捍悍焊撼翰憾",
	"tǎo": "讨",
	"xué": "穴学",
	"xiě": "写",
	"níng,nìng,zhù": "宁",
	"ràng": "让",
	"lǐ": "礼李里理鲤",
	"xùn": "训讯迅汛驯逊殉",
	"yǒng": "永咏泳勇蛹踊",
	"mín": "民",
	"chū": "出初",
	"ní": "尼",
	"sī": "司丝私斯撕嘶",
	"liáo": "辽疗僚聊寥嘹缭",
	"jiā": "加佳嘉枷",
	"nú": "奴",
	"zhào,shào": "召",
	"biān": "边编鞭蝙",
	"pí": "皮疲脾啤",
	"yùn": "孕运韵酝蕴",
	"fā,fà": "发",
	"shèng": "圣胜剩",
	"tái,tāi": "台苔",
	"jiū": "纠究揪鸠",
	"mǔ": "母亩牡拇姆",
	"káng,gāng": "扛",
	"xíng": "刑形型邢",
	"dòng": "动冻栋洞",
	"kǎo": "考烤拷",
	"kòu": "扣寇",
	"tuō": "托拖脱",
	"lǎo": "老",
	"gǒng": "巩汞拱",
	"zhí": "执直侄值职植",
	"kuò": "扩阔廓",
	"yáng": "扬阳杨洋",
	"dì,de": "地",
	"sǎo,sào": "扫",
	"chǎng,cháng": "场",
	"ěr": "耳尔饵",
	"máng": "芒忙盲茫",
	"xiǔ": "朽",
	"pǔ,pò,pō,piáo": "朴",
	"quán": "权全泉拳痊",
	"guò,guo,guō": "过",
	"chén": "臣尘辰沉陈晨忱",
	"zài": "再在",
	"xié": "协胁斜携鞋谐",
	"yā,yà": "压",
	"yàn": "厌艳宴验雁焰砚唁谚堰",
	"yǒu,yòu": "有",
	"cún": "存",
	"bǎi": "百摆",
	"kuā,kuà": "夸",
	"jiàng": "匠酱",
	"duó": "夺踱",
	"huī": "灰挥恢辉徽",
	"dá": "达",
	"sǐ": "死",
	"liè": "列劣烈猎",
	"guǐ": "轨鬼诡",
	"xié,yá,yé,yú,xú": "邪",
	"jiá,jiā,gā,xiá": "夹",
	"chéng": "成呈诚承城程惩橙",
	"mài": "迈麦卖",
	"huà,huá": "划",
	"zhì": "至志帜制质治致秩智置挚掷窒滞稚",
	"cǐ": "此",
	"zhēn": "贞针侦珍真斟榛",
	"jiān": "尖奸歼坚肩艰兼煎",
	"guāng": "光",
	"dāng,dàng": "当",
	"zǎo": "早枣澡蚤藻",
	"tù,tǔ": "吐",
	"xià,hè": "吓",
	"chóng": "虫崇",
	"tuán": "团",
	"tóng,tòng": "同",
	"qū,qǔ": "曲",
	"diào": "吊钓掉",
	"yīn": "因阴音姻茵",
	"chī": "吃嗤痴",
	"ma,má,mǎ": "吗",
	"yǔ": "屿宇羽",
	"fān": "帆翻",
	"huí": "回茴蛔",
	"qǐ,kǎi": "岂",
	"zé": "则责",
	"suì": "岁碎穗祟遂隧",
	"ròu": "肉",
	"zhū,shú": "朱",
	"wǎng": "网往枉",
	"nián": "年",
	"diū": "丢",
	"shé": "舌",
	"zhú": "竹逐烛",
	"qiáo": "乔侨桥瞧荞憔",
	"wěi": "伟伪苇纬萎",
	"chuán,zhuàn": "传",
	"pāng": "乓",
	"pīng": "乒",
	"xiū,xǔ": "休",
	"fú": "伏扶俘浮符幅福凫芙袱辐蝠",
	"yōu": "优忧悠幽",
	"yán": "延严言岩炎沿盐颜阎蜒檐",
	"jiàn": "件建荐贱剑健舰践鉴键箭涧",
	"rèn,rén": "任",
	"huá,huà,huā": "华",
	"jià,jiè,jie": "价",
	"shāng": "伤商",
	"fèn,bīn": "份",
	"fǎng": "仿访纺",
	"yǎng,áng": "仰",
	"zì": "自字",
	"xiě,xuè": "血",
	"xiàng": "向项象像橡",
	"sì,shì": "似",
	"hòu": "后厚候",
	"zhōu": "舟州周洲",
	"háng,xíng": "行",
	"huì,kuài": "会",
	"shā": "杀纱杉砂",
	"hé,gě": "合",
	"zhào": "兆赵照罩",
	"zhòng": "众仲",
	"yé": "爷",
	"sǎn": "伞",
	"chuàng,chuāng": "创",
	"duǒ": "朵躲",
	"wēi": "危威微偎薇巍",
	"xún": "旬寻巡询循",
	"zá": "杂砸",
	"míng": "名明鸣铭螟",
	"duō": "多哆",
	"zhēng": "争征睁筝蒸怔狰",
	"sè": "色涩瑟",
	"zhuàng": "壮状撞",
	"chōng,chòng": "冲",
	"bīng": "冰兵",
	"zhuāng": "庄装妆桩",
	"qìng": "庆",
	"liú": "刘留流榴琉硫瘤",
	"qí,jì,zī,zhāi": "齐",
	"cì": "次赐",
	"jiāo": "交郊浇娇骄胶椒焦蕉礁",
	"chǎn": "产铲阐",
	"wàng": "妄忘旺望",
	"chōng": "充",
	"wèn": "问",
	"chuǎng": "闯",
	"yáng,xiáng": "羊",
	"bìng,bīng": "并",
	"dēng": "灯登蹬",
	"mǐ": "米",
	"guān": "关官棺",
	"hàn,hán": "汗",
	"jué": "决绝掘诀爵",
	"jiāng": "江姜僵缰",
	"tāng,shāng": "汤",
	"chí": "池驰迟持弛",
	"xīng,xìng": "兴",
	"zhái": "宅",
	"ān": "安氨庵鞍",
	"jiǎng": "讲奖桨蒋",
	"jūn": "军均君钧",
	"xǔ,hǔ": "许",
	"fěng": "讽",
	"lùn,lún": "论",
	"nóng": "农浓脓",
	"shè": "设社舍涉赦",
	"nà,nǎ,nèi,nā": "那",
	"jìn,jǐn": "尽",
	"dǎo": "导岛蹈捣祷",
	"sūn,xùn": "孙",
	"zhèn": "阵振震镇",
	"shōu": "收",
	"fáng": "防妨房肪",
	"rú": "如儒蠕",
	"mā": "妈",
	"xì,hū": "戏",
	"hǎo,hào": "好",
	"tā,jiě": "她",
	"guān,guàn": "观冠",
	"huān": "欢",
	"hóng,gōng": "红",
	"mǎi": "买",
	"xiān,qiàn": "纤",
	"jì,jǐ": "纪济",
	"yuē,yāo": "约",
	"shòu": "寿受授售兽瘦",
	"nòng,lòng": "弄",
	"jìn": "进近晋浸",
	"wéi": "违围唯维桅",
	"yuǎn,yuàn": "远",
	"tūn": "吞",
	"tán": "坛谈痰昙谭潭檀",
	"fǔ": "抚斧府俯辅腐甫脯",
	"huài,pēi,pī,péi": "坏",
	"rǎo": "扰",
	"pī": "批披坯霹",
	"zhǎo": "找沼",
	"chě": "扯",
	"zǒu": "走",
	"chāo": "抄钞超",
	"bà": "坝爸霸",
	"gòng": "贡",
	"zhé,shé,zhē": "折",
	"qiǎng,qiāng,chēng": "抢",
	"zhuā": "抓",
	"xiào": "孝笑效哮啸",
	"pāo": "抛",
	"tóu": "投",
	"kàng": "抗炕",
	"fén": "坟焚",
	"kēng": "坑",
	"dǒu": "抖陡蚪",
	"ké,qiào": "壳",
	"fāng,fáng": "坊",
	"niǔ": "扭纽钮",
	"kuài": "块快筷",
	"bǎ,bà": "把",
	"bào": "报抱爆豹",
	"jié": "劫杰洁捷截竭",
	"què": "却确鹊",
	"huā": "花",
	"fēn": "芬吩纷氛",
	"qín": "芹琴禽勤秦擒",
	"láo": "劳牢",
	"lú": "芦炉卢庐颅",
	"gān,gǎn": "杆",
	"kè": "克刻客课",
	"sū,sù": "苏",
	"dù": "杜渡妒镀",
	"gàng,gāng": "杠",
	"cūn": "村",
	"qiú": "求球囚",
	"xìng": "杏幸性姓",
	"gèng,gēng": "更",
	"liǎng": "两",
	"lì,lí": "丽",
	"shù": "束述树竖恕庶墅漱",
	"dòu": "豆逗痘",
	"hái,huán": "还",
	"fǒu,pǐ": "否",
	"lái": "来莱",
	"lián": "连怜帘莲联廉镰",
	"xiàn,xuán": "县",
	"zhù,chú": "助",
	"dāi": "呆",
	"kuàng": "旷况矿框眶",
	"ya,yā": "呀",
	"zú": "足族",
	"dūn": "吨蹲墩",
	"kùn": "困",
	"nán": "男",
	"chǎo,chāo": "吵",
	"yuán,yún,yùn": "员",
	"chuàn": "串",
	"chuī": "吹炊",
	"ba,bā": "吧",
	"hǒu": "吼",
	"gǎng": "岗",
	"bié,biè": "别",
	"dīng,dìng": "钉",
	"gào": "告",
	"wǒ": "我",
	"luàn": "乱",
	"tū": "秃突凸",
	"xiù": "秀袖绣锈嗅",
	"gū,gù": "估",
	"měi": "每美",
	"hé,hē,hè": "何",
	"tǐ,tī,bèn": "体",
	"bó,bǎi,bà": "伯",
	"zuò": "作坐座做",
	"líng": "伶灵铃陵零龄玲凌菱蛉翎",
	"dī": "低堤滴",
	"yòng,yōng": "佣",
	"nǐ": "你拟",
	"zhù": "住注驻柱祝铸贮蛀",
	"zào": "皂灶造燥躁噪",
	"fó,fú,bì,bó": "佛",
	"chè": "彻撤澈",
	"tuǒ": "妥椭",
	"lín": "邻林临琳磷鳞",
	"hán": "含寒函涵韩",
	"chà": "岔衩",
	"cháng": "肠尝常偿",
	"dù,dǔ": "肚",
	"guī,jūn,qiū": "龟",
	"miǎn": "免勉娩冕缅",
	"jiǎo,jué": "角",
	"kuáng": "狂",
	"tiáo,tiāo": "条",
	"luǎn": "卵",
	"yíng": "迎盈营蝇赢荧莹萤",
	"xì,jì": "系",
	"chuáng": "床",
	"kù": "库裤酷",
	"yìng,yīng": "应",
	"lěng": "冷",
	"zhè,zhèi": "这",
	"xù": "序叙绪续絮蓄旭恤酗婿",
	"xián": "闲贤弦咸衔嫌涎舷",
	"jiān,jiàn": "间监",
	"pàn": "判盼叛畔",
	"mēn,mèn": "闷",
	"wāng": "汪",
	"dì,tì,tuí": "弟",
	"shā,shà": "沙",
	"shà,shā": "煞",
	"càn": "灿",
	"wò": "沃卧握",
	"méi,mò": "没",
	"gōu": "沟钩",
	"shěn,chén": "沈",
	"huái": "怀槐徊淮",
	"sòng": "宋送诵颂讼",
	"hóng": "宏虹洪鸿",
	"qióng": "穷琼",
	"zāi": "灾栽",
	"liáng": "良梁粮粱",
	"zhèng": "证郑政",
	"bǔ": "补捕哺",
	"sù": "诉肃素速塑粟溯",
	"shí,zhì": "识",
	"cí": "词辞慈磁祠瓷雌",
	"zhěn": "诊枕疹",
	"niào,suī": "尿",
	"céng": "层",
	"jú": "局菊橘",
	"wěi,yǐ": "尾",
	"zhāng": "张章彰樟",
	"gǎi": "改",
	"lù": "陆录鹿路赂",
	"ē,ā": "阿",
	"zǔ": "阻组祖诅",
	"miào": "妙庙",
	"yāo": "妖腰邀夭吆",
	"nǔ": "努",
	"jìn,jìng": "劲",
	"rěn": "忍",
	"qū": "驱屈岖蛆躯",
	"chún": "纯唇醇",
	"nà": "纳钠捺",
	"bó": "驳脖博搏膊舶渤",
	"zòng,zǒng": "纵",
	"wén,wèn": "纹",
	"lǘ": "驴",
	"huán": "环",
	"qīng": "青轻倾清蜻氢卿",
	"xiàn": "现限线宪陷馅羡献腺",
	"biǎo": "表",
	"mǒ,mò,mā": "抹",
	"lǒng": "拢垄",
	"dān,dàn,dǎn": "担",
	"bá": "拔跋",
	"jiǎn": "拣茧俭捡检减剪简柬碱",
	"tǎn": "坦毯袒",
	"chōu": "抽",
	"yā": "押鸦鸭",
	"guǎi": "拐",
	"pāi": "拍",
	"zhě": "者",
	"dǐng": "顶鼎",
	"yōng": "拥庸",
	"chāi,cā": "拆",
	"dǐ": "抵",
	"jū,gōu": "拘",
	"lā": "垃",
	"lā,lá": "拉",
	"bàn,pàn": "拌",
	"zhāo": "招昭",
	"pō": "坡泼颇",
	"bō": "拨波玻菠播",
	"zé,zhái": "择",
	"tái": "抬",
	"qí,jī": "其奇",
	"qǔ": "取娶",
	"kǔ": "苦",
	"mào": "茂贸帽貌",
	"ruò,rě": "若",
	"miáo": "苗描瞄",
	"píng,pēng": "苹",
	"yīng": "英樱鹰莺婴缨鹦",
	"qié": "茄",
	"jīng": "茎京经惊晶睛精荆兢鲸",
	"zhī,qí": "枝",
	"bēi": "杯悲碑卑",
	"guì,jǔ": "柜",
	"bǎn": "板版",
	"sōng": "松",
	"qiāng": "枪腔",
	"gòu": "构购够垢",
	"sàng,sāng": "丧",
	"huà": "画话桦",
	"huò": "或货获祸惑霍",
	"cì,cī": "刺",
	"yǔ,yù": "雨语",
	"bēn,bèn": "奔",
	"fèn": "奋粪愤忿",
	"hōng": "轰烘",
	"qī,qì": "妻",
	"ōu": "欧殴鸥",
	"qǐng": "顷请",
	"zhuǎn,zhuàn,zhuǎi": "转",
	"zhǎn": "斩盏展",
	"ruǎn": "软",
	"lún": "轮仑伦沦",
	"dào": "到盗悼道稻",
	"chǐ": "齿耻侈",
	"kěn": "肯垦恳啃",
	"hǔ": "虎",
	"xiē,suò": "些",
	"lǔ": "虏鲁卤",
	"shèn": "肾渗慎",
	"shàng": "尚",
	"guǒ": "果裹",
	"kūn": "昆坤",
	"guó": "国",
	"chāng": "昌猖",
	"chàng": "畅唱",
	"diǎn": "典点碘",
	"gù": "固故顾雇",
	"áng": "昂",
	"zhōng": "忠终钟盅衷",
	"ne,ní": "呢",
	"àn": "岸按案暗",
	"tiě,tiē,tiè,": "帖",
	"luó": "罗萝锣箩骡螺逻",
	"kǎi": "凯慨",
	"lǐng,líng": "岭",
	"bài": "败拜",
	"tú": "图徒途涂屠",
	"chuí": "垂锤捶",
	"zhī,zhì": "知织",
	"guāi": "乖",
	"gǎn": "秆赶敢感橄",
	"hé,hè,huó,huò,hú": "和",
	"gòng,gōng": "供共",
	"wěi,wēi": "委",
	"cè,zè,zhāi": "侧",
	"pèi": "佩配沛",
	"pò,pǎi": "迫",
	"de,dì,dí": "的",
	"pá": "爬",
	"suǒ": "所索锁琐",
	"jìng": "径竞竟敬静境镜靖",
	"mìng": "命",
	"cǎi,cài": "采",
	"niàn": "念",
	"tān": "贪摊滩瘫",
	"rǔ": "乳辱",
	"pín": "贫",
	"fū": "肤麸孵敷",
	"fèi": "肺废沸费吠",
	"zhǒng": "肿",
	"péng": "朋棚蓬膨硼鹏澎篷",
	"fú,fù": "服",
	"féi": "肥",
	"hūn": "昏婚荤",
	"tù": "兔",
	"hú": "狐胡壶湖蝴弧葫",
	"gǒu": "狗苟",
	"bǎo": "饱宝保",
	"xiǎng": "享响想",
	"biàn": "变遍辨辩辫",
	"dǐ,de": "底",
	"jìng,chēng": "净",
	"fàng": "放",
	"nào": "闹",
	"zhá": "闸铡",
	"juàn,juǎn": "卷",
	"quàn,xuàn": "券",
	"dān,shàn,chán": "单",
	"chǎo": "炒",
	"qiǎn,jiān": "浅",
	"fǎ": "法",
	"xiè,yì": "泄",
	"lèi": "泪类",
	"zhān": "沾粘毡瞻",
	"pō,bó": "泊",
	"pào,pāo": "泡",
	"xiè": "泻卸屑械谢懈蟹",
	"ní,nì": "泥",
	"zé,shì": "泽",
	"pà": "怕帕",
	"guài": "怪",
	"zōng": "宗棕踪",
	"shěn": "审婶",
	"zhòu": "宙昼皱骤咒",
	"kōng,kòng,kǒng": "空",
	"láng,làng": "郎",
	"chèn": "衬趁",
	"gāi": "该",
	"xiáng,yáng": "详",
	"lì,dài": "隶",
	"jū": "居鞠驹",
	"shuā,shuà": "刷",
	"mèng": "孟梦",
	"gū": "孤姑辜咕沽菇箍",
	"jiàng,xiáng": "降",
	"mèi": "妹昧媚",
	"jiě": "姐",
	"jià": "驾架嫁稼",
	"cān,shēn,cēn,sān": "参",
	"liàn": "练炼恋链",
	"xì": "细隙",
	"shào": "绍哨",
	"tuó": "驼驮鸵",
	"guàn": "贯惯灌罐",
	"zòu": "奏揍",
	"chūn": "春椿",
	"bāng": "帮邦梆",
	"dú,dài": "毒",
	"guà": "挂卦褂",
	"kuǎ": "垮",
	"kuà,kū": "挎",
	"náo": "挠",
	"dǎng,dàng": "挡",
	"shuān": "拴栓",
	"tǐng": "挺艇",
	"kuò,guā": "括",
	"shí,shè": "拾",
	"tiāo,tiǎo": "挑",
	"wā": "挖蛙洼",
	"pīn": "拼",
	"shèn,shén": "甚",
	"mǒu": "某",
	"nuó": "挪",
	"gé": "革阁格隔",
	"xiàng,hàng": "巷",
	"cǎo": "草",
	"chá": "茶察茬",
	"dàng": "荡档",
	"huāng": "荒慌",
	"róng": "荣绒容熔融茸蓉溶榕",
	"nán,nā": "南",
	"biāo": "标彪膘",
	"yào": "药耀",
	"kū": "枯哭窟",
	"xiāng,xiàng": "相",
	"chá,zhā": "查",
	"liǔ": "柳",
	"bǎi,bó,bò": "柏",
	"yào,yāo": "要",
	"wāi": "歪",
	"yán,yàn": "研",
	"lí": "厘狸离犁梨璃黎漓篱",
	"qì,qiè": "砌",
	"miàn": "面",
	"kǎn": "砍坎",
	"shuǎ": "耍",
	"nài": "耐奈",
	"cán": "残蚕惭",
	"zhàn": "战站栈绽蘸",
	"bèi,bēi": "背",
	"lǎn": "览懒揽缆榄",
	"shěng,xǐng": "省",
	"xiāo,xuē": "削",
	"zhǎ": "眨",
	"hǒng,hōng,hòng": "哄",
	"xiǎn": "显险",
	"mào,mò": "冒",
	"yǎ,yā": "哑",
	"yìng": "映硬",
	"zuó": "昨",
	"xīng": "星腥猩",
	"pā": "趴",
	"guì": "贵桂跪刽",
	"sī,sāi": "思",
	"xiā": "虾瞎",
	"mǎ,mā,mà": "蚂",
	"suī": "虽",
	"pǐn": "品",
	"mà": "骂",
	"huá,huā": "哗",
	"yè,yàn,yān": "咽",
	"zán,zǎ": "咱",
	"hā,hǎ,hà": "哈",
	"yǎo": "咬舀",
	"nǎ,něi,na,né": "哪",
	"hāi,ké": "咳",
	"xiá": "峡狭霞匣侠暇辖",
	"gǔ,gū": "骨",
	"gāng,gàng": "钢",
	"tiē": "贴",
	"yào,yuè": "钥",
	"kàn,kān": "看",
	"jǔ": "矩举",
	"zěn": "怎",
	"xuǎn": "选癣",
	"zhòng,zhǒng,chóng": "种",
	"miǎo": "秒渺藐",
	"kē": "科棵颗磕蝌",
	"biàn,pián": "便",
	"zhòng,chóng": "重",
	"liǎ": "俩",
	"duàn": "段断缎锻",
	"cù": "促醋簇",
	"shùn": "顺瞬",
	"xiū": "修羞",
	"sú": "俗",
	"qīn": "侵钦",
	"xìn,shēn": "信",
	"huáng": "皇黄煌凰惶蝗蟥",
	"zhuī,duī": "追",
	"jùn": "俊峻骏竣",
	"dài,dāi": "待",
	"xū": "须虚需",
	"hěn": "很狠",
	"dùn": "盾顿钝",
	"lǜ": "律虑滤氯",
	"pén": "盆",
	"shí,sì,yì": "食",
	"dǎn": "胆",
	"táo": "逃桃陶萄淘",
	"pàng": "胖",
	"mài,mò": "脉",
	"dú": "独牍",
	"jiǎo": "狡饺绞脚搅",
	"yuàn": "怨院愿",
	"ráo": "饶",
	"wān": "弯湾豌",
	"āi": "哀哎埃",
	"jiāng,jiàng": "将浆",
	"tíng": "亭庭停蜓廷",
	"liàng": "亮谅辆晾",
	"dù,duó": "度",
	"chuāng": "疮窗",
	"qīn,qìng": "亲",
	"zī": "姿资滋咨",
	"dì": "帝递第蒂缔",
	"chà,chā,chāi,cī": "差",
	"yǎng": "养氧痒",
	"qián": "前钱钳潜黔",
	"mí": "迷谜靡",
	"nì": "逆昵匿腻",
	"zhà,zhá": "炸",
	"zǒng": "总",
	"làn": "烂滥",
	"pào,páo,bāo": "炮",
	"tì": "剃惕替屉涕",
	"sǎ,xǐ": "洒",
	"zhuó": "浊啄灼茁卓酌",
	"xǐ,xiǎn": "洗",
	"qià": "洽恰",
	"pài": "派湃",
	"huó": "活",
	"rǎn": "染",
	"héng": "恒衡",
	"hún": "浑魂",
	"nǎo": "恼脑",
	"jué,jiào": "觉",
	"hèn": "恨",
	"xuān": "宣轩喧",
	"qiè": "窃怯",
	"biǎn,piān": "扁",
	"ǎo": "袄",
	"shén": "神",
	"shuō,shuì,yuè": "说",
	"tuì": "退蜕",
	"chú": "除厨锄雏橱",
	"méi": "眉梅煤霉玫枚媒楣",
	"hái": "孩",
	"wá": "娃",
	"lǎo,mǔ": "姥",
	"nù": "怒",
	"hè": "贺赫褐鹤",
	"róu": "柔揉蹂",
	"bǎng": "绑膀",
	"lěi": "垒蕾儡",
	"rào": "绕",
	"gěi,jǐ": "给",
	"luò": "骆洛",
	"luò,lào": "络",
	"tǒng": "统桶筒捅",
	"gēng": "耕羹",
	"hào": "耗浩",
	"bān": "班般斑搬扳颁",
	"zhū": "珠株诸猪蛛",
	"lāo": "捞",
	"fěi": "匪诽",
	"zǎi,zài": "载",
	"mái,mán": "埋",
	"shāo,shào": "捎稍",
	"zhuō": "捉桌拙",
	"niē": "捏",
	"kǔn": "捆",
	"dū,dōu": "都",
	"sǔn": "损笋",
	"juān": "捐鹃",
	"zhé": "哲辙",
	"rè": "热",
	"wǎn": "挽晚碗惋婉",
	"ái,āi": "挨",
	"mò,mù": "莫",
	"è,wù,ě,wū": "恶",
	"tóng": "桐铜童彤瞳",
	"xiào,jiào": "校",
	"hé,hú": "核",
	"yàng": "样漾",
	"gēn": "根跟",
	"gē": "哥鸽割歌戈",
	"chǔ": "础储楚",
	"pò": "破魄",
	"tào": "套",
	"chái": "柴豺",
	"dǎng": "党",
	"mián": "眠绵棉",
	"shài": "晒",
	"jǐn": "紧锦谨",
	"yūn,yùn": "晕",
	"huàng,huǎng": "晃",
	"shǎng": "晌赏",
	"ēn": "恩",
	"ài,āi": "唉",
	"ā,á,ǎ,à,a": "啊",
	"bà,ba,pí": "罢",
	"zéi": "贼",
	"tiě": "铁",
	"zuàn,zuān": "钻",
	"qiān,yán": "铅",
	"quē": "缺",
	"tè": "特",
	"chéng,shèng": "乘",
	"dí": "敌笛涤嘀嫡",
	"zū": "租",
	"chèng": "秤",
	"mì,bì": "秘泌",
	"chēng,chèn,chèng": "称",
	"tòu": "透",
	"zhài": "债寨",
	"dào,dǎo": "倒",
	"tǎng,cháng": "倘",
	"chàng,chāng": "倡",
	"juàn": "倦绢眷",
	"chòu,xiù": "臭",
	"shè,yè,yì": "射",
	"xú": "徐",
	"háng": "航杭",
	"ná": "拿",
	"wēng": "翁嗡",
	"diē": "爹跌",
	"ài": "爱碍艾隘",
	"gē,gé": "胳搁",
	"cuì": "脆翠悴粹",
	"zàng": "脏葬",
	"láng": "狼廊琅榔",
	"féng": "逢",
	"è": "饿扼遏愕噩鳄",
	"shuāi,cuī": "衰",
	"gāo": "高糕羔篙",
	"zhǔn": "准",
	"bìng": "病",
	"téng": "疼腾誊藤",
	"liáng,liàng": "凉量",
	"táng": "唐堂塘膛糖棠搪",
	"pōu": "剖",
	"chù,xù": "畜",
	"páng,bàng": "旁磅",
	"lǚ": "旅屡吕侣铝缕履",
	"fěn": "粉",
	"liào": "料镣",
	"shāo": "烧",
	"yān": "烟淹",
	"tāo": "涛掏滔",
	"lào": "涝酪",
	"zhè": "浙蔗",
	"xiāo": "消宵销萧硝箫嚣",
	"hǎi": "海",
	"zhǎng,zhàng": "涨",
	"làng": "浪",
	"rùn": "润闰",
	"tàng": "烫",
	"yǒng,chōng": "涌",
	"huǐ": "悔毁",
	"qiāo,qiǎo": "悄",
	"hài": "害亥骇",
	"jiā,jia,jie": "家",
	"kuān": "宽",
	"bīn": "宾滨彬缤濒",
	"zhǎi": "窄",
	"lǎng": "朗",
	"dú,dòu": "读",
	"zǎi": "宰",
	"shàn,shān": "扇",
	"shān,shàn": "苫",
	"wà": "袜",
	"xiáng": "祥翔",
	"shuí": "谁",
	"páo": "袍咆",
	"bèi,pī": "被",
	"tiáo,diào,zhōu": "调",
	"yuān": "冤鸳渊",
	"bō,bāo": "剥",
	"ruò": "弱",
	"péi": "陪培赔",
	"niáng": "娘",
	"tōng": "通",
	"néng,nài": "能",
	"nán,nàn,nuó": "难",
	"sāng": "桑",
	"pěng": "捧",
	"dǔ": "堵赌睹",
	"yǎn": "掩眼演衍",
	"duī": "堆",
	"pái,pǎi": "排",
	"tuī": "推",
	"jiào,jiāo": "教",
	"lüè": "掠略",
	"jù,jū": "据",
	"kòng": "控",
	"zhù,zhuó,zhe": "著",
	"jūn,jùn": "菌",
	"lè,lēi": "勒",
	"méng": "萌盟檬朦",
	"cài": "菜",
	"tī": "梯踢剔",
	"shāo,sào": "梢",
	"fù,pì": "副",
	"piào,piāo": "票",
	"shuǎng": "爽",
	"shèng,chéng": "盛",
	"què,qiāo,qiǎo": "雀",
	"xuě": "雪",
	"chí,shi": "匙",
	"xuán": "悬玄漩",
	"mī,mí": "眯",
	"la,lā": "啦",
	"shé,yí": "蛇",
	"lèi,léi,lěi": "累",
	"zhǎn,chán": "崭",
	"quān,juàn,juān": "圈",
	"yín": "银吟淫",
	"bèn": "笨",
	"lóng,lǒng": "笼",
	"mǐn": "敏皿闽悯",
	"nín": "您",
	"ǒu": "偶藕",
	"tōu": "偷",
	"piān": "偏篇翩",
	"dé,děi,de": "得",
	"jiǎ,jià": "假",
	"pán": "盘",
	"chuán": "船",
	"cǎi": "彩睬踩",
	"lǐng": "领",
	"liǎn": "脸敛",
	"māo,máo": "猫",
	"měng": "猛锰",
	"cāi": "猜",
	"háo": "毫豪壕嚎",
	"má": "麻",
	"guǎn": "馆管",
	"còu": "凑",
	"hén": "痕",
	"kāng": "康糠慷",
	"xuán,xuàn": "旋",
	"zhe,zhuó,zháo,zhāo": "着",
	"lǜ,shuài": "率",
	"gài,gě,hé": "盖",
	"cū": "粗",
	"lín,lìn": "淋",
	"qú,jù": "渠",
	"jiàn,jiān": "渐溅",
	"hùn,hún": "混",
	"pó": "婆",
	"qíng": "情晴擎",
	"cǎn": "惨",
	"sù,xiǔ,xiù": "宿",
	"yáo": "窑谣摇遥肴姚",
	"móu": "谋",
	"mì": "密蜜觅",
	"huǎng": "谎恍幌",
	"tán,dàn": "弹",
	"suí": "随",
	"yǐn,yìn": "隐",
	"jǐng,gěng": "颈",
	"shéng": "绳",
	"qí": "骑棋旗歧祈脐畦崎鳍",
	"chóu": "绸酬筹稠愁畴",
	"lǜ,lù": "绿",
	"dā": "搭",
	"kuǎn": "款",
	"tǎ": "塔",
	"qū,cù": "趋",
	"tí,dī,dǐ": "提",
	"jiē,qì": "揭",
	"xǐ": "喜徙",
	"sōu": "搜艘",
	"chā": "插",
	"lǒu,lōu": "搂",
	"qī,jī": "期",
	"rě": "惹",
	"sàn,sǎn": "散",
	"dǒng": "董懂",
	"gě,gé": "葛",
	"pú": "葡菩蒲",
	"zhāo,cháo": "朝",
	"luò,là,lào": "落",
	"kuí": "葵魁",
	"bàng": "棒傍谤",
	"yǐ,yī": "椅",
	"sēn": "森",
	"gùn,hùn": "棍",
	"bī": "逼",
	"zhí,shi": "殖",
	"xià,shà": "厦",
	"liè,liě": "裂",
	"xióng": "雄熊",
	"zàn": "暂赞",
	"yǎ": "雅",
	"chǎng": "敞",
	"zhǎng": "掌",
	"shǔ": "暑鼠薯黍蜀署曙",
	"zuì": "最罪醉",
	"hǎn": "喊罕",
	"jǐng,yǐng": "景",
	"lǎ": "喇",
	"pēn,pèn": "喷",
	"pǎo,páo": "跑",
	"chuǎn": "喘",
	"hē,hè,yè": "喝",
	"hóu": "喉猴",
	"pù,pū": "铺",
	"hēi": "黑",
	"guō": "锅郭",
	"ruì": "锐瑞",
	"duǎn": "短",
	"é": "鹅额讹俄",
	"děng": "等",
	"kuāng": "筐",
	"shuì": "税睡",
	"zhù,zhú": "筑",
	"shāi": "筛",
	"dá,dā": "答",
	"ào": "傲澳懊",
	"pái": "牌徘",
	"bǎo,bǔ,pù": "堡",
	"ào,yù": "奥",
	"fān,pān": "番",
	"là,xī": "腊",
	"huá": "猾滑",
	"rán": "然燃",
	"chán": "馋缠蝉",
	"mán": "蛮馒",
	"tòng": "痛",
	"shàn": "善擅膳赡",
	"zūn": "尊遵",
	"pǔ": "普谱圃浦",
	"gǎng,jiǎng": "港",
	"céng,zēng": "曾",
	"wēn": "温瘟",
	"kě": "渴",
	"zhā": "渣",
	"duò": "惰舵跺",
	"gài": "溉概丐钙",
	"kuì": "愧",
	"yú,tōu": "愉",
	"wō": "窝蜗",
	"cuàn": "窜篡",
	"qún": "裙群",
	"qiáng,qiǎng,jiàng": "强",
	"shǔ,zhǔ": "属",
	"zhōu,yù": "粥",
	"sǎo": "嫂",
	"huǎn": "缓",
	"piàn": "骗",
	"mō": "摸",
	"shè,niè": "摄",
	"tián,zhèn": "填",
	"gǎo": "搞稿镐",
	"suàn": "蒜算",
	"méng,mēng,měng": "蒙",
	"jìn,jīn": "禁",
	"lóu": "楼娄",
	"lài": "赖癞",
	"lù,liù": "碌",
	"pèng": "碰",
	"léi": "雷",
	"báo": "雹",
	"dū": "督",
	"nuǎn": "暖",
	"xiē": "歇楔蝎",
	"kuà": "跨胯",
	"tiào,táo": "跳",
	"é,yǐ": "蛾",
	"sǎng": "嗓",
	"qiǎn": "遣谴",
	"cuò": "错挫措锉",
	"ǎi": "矮蔼",
	"shǎ": "傻",
	"cuī": "催摧崔",
	"tuǐ": "腿",
	"chù": "触矗",
	"jiě,jiè,xiè": "解",
	"shù,shǔ,shuò": "数",
	"mǎn": "满",
	"liū,liù": "溜",
	"gǔn": "滚",
	"sāi,sài,sè": "塞",
	"pì,bì": "辟",
	"dié": "叠蝶谍碟",
	"fèng,féng": "缝",
	"qiáng": "墙",
	"piě,piē": "撇",
	"zhāi": "摘斋",
	"shuāi": "摔",
	"mó,mú": "模",
	"bǎng,bàng": "榜",
	"zhà": "榨乍诈",
	"niàng": "酿",
	"zāo": "遭糟",
	"suān": "酸",
	"shang,cháng": "裳",
	"sòu": "嗽",
	"là": "蜡辣",
	"qiāo": "锹敲跷",
	"zhuàn": "赚撰",
	"wěn": "稳吻紊",
	"bí": "鼻荸",
	"mó": "膜魔馍摹蘑",
	"xiān,xiǎn": "鲜",
	"yí,nǐ": "疑",
	"gāo,gào": "膏",
	"zhē": "遮",
	"duān": "端",
	"màn": "漫慢曼幔",
	"piāo,piào,piǎo": "漂",
	"lòu": "漏陋",
	"sài": "赛",
	"nèn": "嫩",
	"dèng": "凳邓瞪",
	"suō,sù": "缩",
	"qù,cù": "趣",
	"sā,sǎ": "撒",
	"tàng,tāng": "趟",
	"chēng": "撑",
	"zēng": "增憎",
	"cáo": "槽曹",
	"héng,hèng": "横",
	"piāo": "飘",
	"mán,mén": "瞒",
	"tí": "题蹄啼",
	"yǐng": "影颖",
	"bào,pù": "暴",
	"tà": "踏蹋",
	"kào": "靠铐",
	"pì": "僻屁譬",
	"tǎng": "躺",
	"dé": "德",
	"mó,mā": "摩",
	"shú": "熟秫赎",
	"hú,hū,hù": "糊",
	"pī,pǐ": "劈",
	"cháo": "潮巢",
	"cāo": "操糙",
	"yàn,yān": "燕",
	"diān": "颠掂",
	"báo,bó,bò": "薄",
	"cān": "餐",
	"xǐng": "醒",
	"zhěng": "整拯",
	"zuǐ": "嘴",
	"zèng": "赠",
	"mó,mò": "磨",
	"níng": "凝狞柠",
	"jiǎo,zhuó": "缴",
	"cā": "擦",
	"cáng,zàng": "藏",
	"fán,pó": "繁",
	"bì,bei": "臂",
	"bèng": "蹦泵",
	"pān": "攀潘",
	"chàn,zhàn": "颤",
	"jiāng,qiáng": "疆",
	"rǎng": "壤攘",
	"jiáo,jué,jiào": "嚼",
	"rǎng,rāng": "嚷",
	"chǔn": "蠢",
	"lù,lòu": "露",
	"náng,nāng": "囊",
	"dǎi": "歹",
	"rǒng": "冗",
	"hāng,bèn": "夯",
	"āo,wā": "凹",
	"féng,píng": "冯",
	"yū": "迂淤",
	"xū,yù": "吁",
	"lèi,lē": "肋",
	"kōu": "抠",
	"lūn,lún": "抡",
	"jiè,gài": "芥",
	"xīn,xìn": "芯",
	"chā,chà": "杈",
	"xiāo,xiào": "肖",
	"zhī,zī": "吱",
	"ǒu,ōu,òu": "呕",
	"nà,nè": "呐",
	"qiàng,qiāng": "呛",
	"tún,dùn": "囤",
	"kēng,háng": "吭",
	"shǔn": "吮",
	"diàn,tián": "佃",
	"sì,cì": "伺",
	"zhǒu": "肘帚",
	"diàn,tián,shèng": "甸",
	"páo,bào": "刨",
	"lìn": "吝赁躏",
	"duì,ruì,yuè": "兑",
	"zhuì": "坠缀赘",
	"kē,kě": "坷",
	"tuò,tà,zhí": "拓",
	"fú,bì": "拂",
	"nǐng,níng,nìng": "拧",
	"ào,ǎo,niù": "拗",
	"kē,hē": "苛",
	"yān,yǎn": "奄",
	"hē,a,kē": "呵",
	"gā,kā": "咖",
	"biǎn": "贬匾",
	"jiǎo,yáo": "侥",
	"chà,shā": "刹",
	"āng": "肮",
	"wèng": "瓮",
	"nüè,yào": "疟",
	"páng": "庞螃",
	"máng,méng": "氓",
	"gē,yì": "疙",
	"jǔ,jù": "沮",
	"zú,cù": "卒",
	"nìng": "泞",
	"chǒng": "宠",
	"wǎn,yuān": "宛",
	"mí,mǐ": "弥",
	"qì,qiè,xiè": "契",
	"xié,jiā": "挟",
	"duò,duǒ": "垛",
	"jiá": "荚颊",
	"zhà,shān,shi,cè": "栅",
	"bó,bèi": "勃",
	"zhóu,zhòu": "轴",
	"nüè": "虐",
	"liē,liě,lié,lie": "咧",
	"dǔn": "盹",
	"xūn": "勋",
	"yo,yō": "哟",
	"mī": "咪",
	"qiào,xiào": "俏",
	"hóu,hòu": "侯",
	"pēi": "胚",
	"tāi": "胎",
	"luán": "峦",
	"sà": "飒萨",
	"shuò": "烁",
	"xuàn": "炫",
	"píng,bǐng": "屏",
	"nà,nuó": "娜",
	"pá,bà": "耙",
	"gěng": "埂耿梗",
	"niè": "聂镊孽",
	"mǎng": "莽",
	"qī,xī": "栖",
	"jiǎ,gǔ": "贾",
	"chěng": "逞",
	"pēng": "砰烹",
	"láo,lào": "唠",
	"bàng,bèng": "蚌",
	"gōng,zhōng": "蚣",
	"li,lǐ,lī": "哩",
	"suō": "唆梭嗦",
	"hēng": "哼",
	"zāng": "赃",
	"qiào": "峭窍撬",
	"mǎo": "铆",
	"ǎn": "俺",
	"sǒng": "耸",
	"juè,jué": "倔",
	"yīn,yān,yǐn": "殷",
	"guàng": "逛",
	"něi": "馁",
	"wō,guō": "涡",
	"lào,luò": "烙",
	"nuò": "诺懦糯",
	"zhūn": "谆",
	"niǎn,niē": "捻",
	"qiā": "掐",
	"yè,yē": "掖",
	"chān,xiān,càn,shǎn": "掺",
	"dǎn,shàn": "掸",
	"fēi,fěi": "菲",
	"qián,gān": "乾",
	"shē": "奢赊",
	"shuò,shí": "硕",
	"luō,luó,luo": "啰",
	"shá": "啥",
	"hǔ,xià": "唬",
	"tuò": "唾",
	"bēng": "崩",
	"dāng,chēng": "铛",
	"xiǎn,xǐ": "铣",
	"jiǎo,jiáo": "矫",
	"tiáo": "笤",
	"kuǐ,guī": "傀",
	"xìn": "衅",
	"dōu": "兜",
	"jì,zhài": "祭",
	"xiáo": "淆",
	"tǎng,chǎng": "淌",
	"chún,zhūn": "淳",
	"shuàn": "涮",
	"dāng": "裆",
	"wèi,yù": "尉",
	"duò,huī": "堕",
	"chuò,chāo": "绰",
	"bēng,běng,bèng": "绷",
	"zōng,zèng": "综",
	"zhuó,zuó": "琢",
	"chuǎi,chuài,chuāi,tuán,zhuī": "揣",
	"péng,bāng": "彭",
	"chān": "搀",
	"cuō": "搓",
	"sāo": "搔",
	"yē": "椰",
	"zhuī,chuí": "椎",
	"léng,lēng,líng": "棱",
	"hān": "酣憨",
	"sū": "酥",
	"záo": "凿",
	"qiào,qiáo": "翘",
	"zhā,chā": "喳",
	"bǒ": "跛",
	"há,gé": "蛤",
	"qiàn,kàn": "嵌",
	"bāi": "掰",
	"yān,ā": "腌",
	"wàn": "腕",
	"dūn,duì": "敦",
	"kuì,huì": "溃",
	"jiǒng": "窘",
	"sāo,sǎo": "骚",
	"pìn": "聘",
	"bǎ": "靶",
	"xuē": "靴薛",
	"hāo": "蒿",
	"léng": "楞",
	"kǎi,jiē": "楷",
	"pín,bīn": "频",
	"zhuī": "锥",
	"tuí": "颓",
	"sāi": "腮",
	"liú,liù": "馏",
	"nì,niào": "溺",
	"qǐn": "寝",
	"luǒ": "裸",
	"miù": "谬",
	"jiǎo,chāo": "剿",
	"áo,āo": "熬",
	"niān": "蔫",
	"màn,wàn": "蔓",
	"chá,chā": "碴",
	"xūn,xùn": "熏",
	"tiǎn": "舔",
	"sēng": "僧",
	"da,dá": "瘩",
	"guǎ": "寡",
	"tuì,tùn": "褪",
	"niǎn": "撵碾",
	"liáo,liāo": "撩",
	"cuō,zuǒ": "撮",
	"ruǐ": "蕊",
	"cháo,zhāo": "嘲",
	"biē": "憋鳖",
	"hēi,mò": "嘿",
	"zhuàng,chuáng": "幢",
	"jī,qǐ": "稽",
	"lǒu": "篓",
	"lǐn": "凛檩",
	"biě,biē": "瘪",
	"liáo,lào,lǎo": "潦",
	"chéng,dèng": "澄",
	"lèi,léi": "擂",
	"piáo": "瓢",
	"shà": "霎",
	"mò,má": "蟆",
	"qué": "瘸",
	"liáo,liǎo": "燎",
	"liào,liǎo": "瞭",
	"sào,sāo": "臊",
	"mí,méi": "糜",
	"ái": "癌",
	"tún": "臀",
	"huò,huō,huá": "豁",
	"pù,bào": "瀑",
	"chuō": "戳",
	"zǎn,cuán": "攒",
	"cèng": "蹭",
	"bò,bǒ": "簸",
	"bó,bù": "簿",
	"bìn": "鬓",
	"suǐ": "髓",
	"ráng": "瓤"
};

// 有些通假字，单字本身没有这个读音，但是通假字可以有。
// 如：阿家阿翁 [["ā"], ["gū"], ["ā"], ["wēng"]]，家通姑。
var phrasesDict = {
	"朝阳区": [["cháo"], ["yáng"], ["qū"]]
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var assign = shouldUseNative() ? Object.assign : function (target, source) {
	var from = void 0;
	var to = toObject(target);
	var symbols = void 0;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

// XXX: Symbol when web support.
var PINYIN_STYLE = {
	NORMAL: 0, // 普通风格，不带音标。
	TONE: 1, // 标准风格，音标在韵母的第一个字母上。
	TONE2: 2, // 声调以数字形式在拼音之后，使用数字 0~4 标识。
	TO3NE: 5, // 声调以数字形式在声母之后，使用数字 0~4 标识。
	INITIALS: 3, // 仅需要声母部分。
	FIRST_LETTER: 4 // 仅保留首字母。
};
var DEFAULT_OPTIONS = {
	style: PINYIN_STYLE.TONE, // 风格
	segment: false, // 分词。
	heteronym: false // 多音字
};

// 声母表。
var INITIALS = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,r,zh,ch,sh,z,c,s".split(",");
// 韵母表。
//const FINALS = "ang,eng,ing,ong,an,en,in,un,er,ai,ei,ui,ao,ou,iu,ie,ve,a,o,e,i,u,v".split(",");
// 带音标字符。
var PHONETIC_SYMBOL = {
	"ā": "a1",
	"á": "a2",
	"ǎ": "a3",
	"à": "a4",
	"ē": "e1",
	"é": "e2",
	"ě": "e3",
	"è": "e4",
	"ō": "o1",
	"ó": "o2",
	"ǒ": "o3",
	"ò": "o4",
	"ī": "i1",
	"í": "i2",
	"ǐ": "i3",
	"ì": "i4",
	"ū": "u1",
	"ú": "u2",
	"ǔ": "u3",
	"ù": "u4",
	"ü": "v0",
	"ǘ": "v2",
	"ǚ": "v3",
	"ǜ": "v4",
	"ń": "n2",
	"ň": "n3",
	"": "m2"
};
var RE_PHONETIC_SYMBOL = new RegExp("([" + Object.keys(PHONETIC_SYMBOL).join("") + "])", "g");
var RE_TONE2 = /([aeoiuvnm])([0-4])$/;

/*
 * 格式化拼音为声母（Initials）形式。
 * @param {String}
 * @return {String}
 */
function initials(pinyin) {
	for (var i = 0, l = INITIALS.length; i < l; i++) {
		if (pinyin.indexOf(INITIALS[i]) === 0) {
			return INITIALS[i];
		}
	}
	return "";
}

var Pinyin = function () {
	function Pinyin(dict) {
		classCallCheck(this, Pinyin);

		this._dict = dict;
	}

	// @param {String} hans 要转为拼音的目标字符串（汉字）。
	// @param {Object} options, 可选，用于指定拼音风格，是否启用多音字。
	// @return {Array} 返回的拼音列表。


	createClass(Pinyin, [{
		key: 'convert',
		value: function convert(hans, options) {

			if (typeof hans !== "string") {
				return [];
			}

			options = assign({}, DEFAULT_OPTIONS, options);

			var pys = [];
			var nohans = "";

			for (var i = 0, firstCharCode, words, l = hans.length; i < l; i++) {

				words = hans[i];
				firstCharCode = words.charCodeAt(0);

				if (this._dict[firstCharCode]) {

					// ends of non-chinese words.
					if (nohans.length > 0) {
						pys.push([nohans]);
						nohans = ""; // reset non-chinese words.
					}

					pys.push(this.single_pinyin(words, options));
				} else {
					nohans += words;
				}
			}

			// 清理最后的非中文字符串。
			if (nohans.length > 0) {
				pys.push([nohans]);
				nohans = ""; // reset non-chinese words.
			}
			return pys;
		}

		// 词语注音
		// @param {String} phrases, 指定的词组。
		// @param {Object} options, 选项。
		// @return {Array}

	}, {
		key: 'phrases_pinyin',
		value: function phrases_pinyin(phrases, options) {
			if (typeof phrases !== "string") {
				return [];
			}

			options = assign({}, DEFAULT_OPTIONS, options);

			var py = [];
			if (phrasesDict.hasOwnProperty(phrases)) {
				//! copy pinyin result.
				phrasesDict[phrases].forEach(function (item, idx) {
					py[idx] = [];
					if (options.heteronym) {
						item.forEach(function (py_item, py_index) {
							py[idx][py_index] = Pinyin.toFixed(py_item, options.style);
						});
					} else {
						py[idx][0] = Pinyin.toFixed(item[0], options.style);
					}
				});
			} else {
				for (var i = 0, l = phrases.length; i < l; i++) {
					py = py.concat(this.convert(phrases[i], options));
				}
			}
			return py;
		}

		// 单字拼音转换。
		// @param {String} han, 单个汉字
		// @return {Array} 返回拼音列表，多音字会有多个拼音项。

	}, {
		key: 'single_pinyin',
		value: function single_pinyin(han, options) {

			if (typeof han !== "string") {
				return [];
			}
			if (han.length !== 1) {
				return this.single_pinyin(han.charAt(0), options);
			}

			var hanCode = han.charCodeAt(0);

			if (!this._dict[hanCode]) {
				return [han];
			}

			var pys = this._dict[hanCode].split(",");
			if (!options.heteronym) {
				return [Pinyin.toFixed(pys[0], options.style)];
			}

			// 临时存储已存在的拼音，避免多音字拼音转换为非注音风格出现重复。
			var py_cached = {};
			var pinyins = [];
			for (var i = 0, py, l = pys.length; i < l; i++) {
				py = Pinyin.toFixed(pys[i], options.style);
				if (py_cached.hasOwnProperty(py)) {
					continue;
				}
				py_cached[py] = py;

				pinyins.push(py);
			}
			return pinyins;
		}

		/**
   * 格式化拼音风格。
   *
   * @param {String} pinyin TONE 风格的拼音。
   * @param {ENUM} style 目标转换的拼音风格。
   * @return {String} 转换后的拼音。
   */

	}, {
		key: 'compare',


		/**
   * 比较两个汉字转成拼音后的排序顺序，可以用作默认的拼音排序算法。
   *
   * @param {String} hanA 汉字字符串 A。
   * @return {String} hanB 汉字字符串 B。
   * @return {Number} 返回 -1，0，或 1。
   */
		value: function compare(hanA, hanB) {
			var pinyinA = this.convert(hanA, DEFAULT_OPTIONS);
			var pinyinB = this.convert(hanB, DEFAULT_OPTIONS);
			return String(pinyinA).localeCompare(pinyinB);
		}
	}], [{
		key: 'toFixed',
		value: function toFixed(pinyin, style) {
			var tone = ""; // 声调。
			var first_letter = void 0;
			var py = void 0;
			switch (style) {
				case PINYIN_STYLE.INITIALS:
					return initials(pinyin);

				case PINYIN_STYLE.FIRST_LETTER:
					first_letter = pinyin.charAt(0);
					if (PHONETIC_SYMBOL.hasOwnProperty(first_letter)) {
						first_letter = PHONETIC_SYMBOL[first_letter].charAt(0);
					}
					return first_letter;

				case PINYIN_STYLE.NORMAL:
					return pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1_phonetic) {
						return PHONETIC_SYMBOL[$1_phonetic].replace(RE_TONE2, "$1");
					});

				case PINYIN_STYLE.TO3NE:
					return pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1_phonetic) {
						return PHONETIC_SYMBOL[$1_phonetic];
					});

				case PINYIN_STYLE.TONE2:
					py = pinyin.replace(RE_PHONETIC_SYMBOL, function ($0, $1) {
						// 声调数值。
						tone = PHONETIC_SYMBOL[$1].replace(RE_TONE2, "$2");

						return PHONETIC_SYMBOL[$1].replace(RE_TONE2, "$1");
					});
					return py + tone;

				case PINYIN_STYLE.TONE:
				default:
					return pinyin;
			}
		}
	}, {
		key: 'STYLE_NORMAL',
		get: function get$$1() {
			return PINYIN_STYLE.NORMAL;
		}
	}, {
		key: 'STYLE_TONE',
		get: function get$$1() {
			return PINYIN_STYLE.TONE;
		}
	}, {
		key: 'STYLE_TONE2',
		get: function get$$1() {
			return PINYIN_STYLE.TONE2;
		}
	}, {
		key: 'STYLE_TO3NE',
		get: function get$$1() {
			return PINYIN_STYLE.TO3NE;
		}
	}, {
		key: 'STYLE_INITIALS',
		get: function get$$1() {
			return PINYIN_STYLE.INITIALS;
		}
	}, {
		key: 'STYLE_FIRST_LETTER',
		get: function get$$1() {
			return PINYIN_STYLE.FIRST_LETTER;
		}
	}, {
		key: 'DEFAULT_OPTIONS',
		get: function get$$1() {
			return DEFAULT_OPTIONS;
		}
	}]);
	return Pinyin;
}();

// 解压拼音库。
// @param {Object} dict_combo, 压缩的拼音库。
// @param {Object} 解压的拼音库。


function buildPinyinCache(dict_combo) {
	var hans = '';
	var uncomboed = {};

	for (var py in dict_combo) {
		hans = dict_combo[py];
		for (var i = 0, han, l = hans.length; i < l; i++) {
			han = hans.charCodeAt(i);
			if (!uncomboed.hasOwnProperty(han)) {
				uncomboed[han] = py;
			} else {
				uncomboed[han] += "," + py;
			}
		}
	}

	return uncomboed;
}

var pinyin = new Pinyin(buildPinyinCache(pinyinDict));

pinyin.version = 'v2.8.3';

var jeselvmo = {
	validator: validator,
	platform: platform,
	localStore: localStore,
	sessionStore: sessionStore,
	request: request,
	regexp: regexp,
	utils: utils,
	dateUtils: dateUtils,
	urlUtils: urlUtils,
	pinyin: pinyin
};

if (window) {
	window.J = jeselvmo;
}

return jeselvmo;

})));
