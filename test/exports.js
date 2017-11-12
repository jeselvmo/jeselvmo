var assert = require('assert');
var jeselvmo = require('../index');
var isPostalCodeLocales = require('../validator/lib/isPostalCode').locales;

describe('Exports', function () {
	it('should export validators', function () {
		assert.equal(typeof jeselvmo.validator.isEmail, 'function');
		assert.equal(typeof jeselvmo.validator.isAlpha, 'function');
	});

	it('should export sanitizers', function () {
		assert.equal(typeof jeselvmo.validator.toBoolean, 'function');
		assert.equal(typeof jeselvmo.validator.toFloat, 'function');
	});

	it('should export the version number', function () {
		/* eslint-disable global-require */
		assert.equal(jeselvmo.version, require('../package.json').version,
			'Version number mismatch in "package.json" vs. "jeselvmo.js"');
		/* eslint-enable global-require */
	});

	it('should export isPostalCode\'s supported locales', function () {
		assert.ok(isPostalCodeLocales instanceof Array);
	});
});
