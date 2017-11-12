var assert = require('assert');
var jeselvmo = require('../jeselvmo');
var min = require('../jeselvmo.min');

describe('Minified version', function () {
	it('should export the same things as the server-side version', function () {
		for (var key in jeselvmo) {
			if ({}.hasOwnProperty.call(jeselvmo, key)) {
				assert.equal(typeof jeselvmo[key],
					typeof min[key], `Minified version did not export ${key}`);
			}
		}
	});

	it('should be up to date', function () {
		assert.equal(min.version, jeselvmo.version, 'Minified version mismatch. Run `make min`');
	});

	it('should validate strings', function () {
		assert.equal(min.validator.isEmail('foo@bar.com'), true);
		assert.equal(min.validator.isEmail('foo'), false);
	});

	it('should sanitize strings', function () {
		assert.equal(min.validator.toBoolean('1'), true);
	});
});
