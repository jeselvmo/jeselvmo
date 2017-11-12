/* eslint-disable no-unused-vars */
var dateutil = require('../lib/dateutil'),
	format = require('util').format,
	assert = require('assert'),
	path = require('path'),
	fs = require('fs'),
	vm = require('vm');


function test(options) {
	var args = options.args || [];

	args.unshift(null);

	Object.keys(options.expect).forEach(function (input) {
		args[0] = input;
		var result = dateutil[options.sanitizer](...args);
		var expected = options.expect[input];
		if (isNaN(result) && !result.length && isNaN(expected)) {
			return;
		}

		if (result !== expected) {
			var warning = format('validator.%s(%s) returned "%s" but should have returned "%s"',
				options.sanitizer, args.join(', '), result, expected);

			throw new Error(warning);
		}
	});
}

describe('Dateutils', function () {

	it('should get today date', function () {
		console.log(dateutil.now());
		console.log(dateutil.parse('2017-11-12 10:30:01'));
		console.log(dateutil.format(new Date(2017, 3, 8), 'yyyy'));
		test({
			sanitizer: 'today',
			expect: {'2017-11-12T00:00:00.000Z': false},
		});
	});


});
