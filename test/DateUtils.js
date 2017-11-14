var assert = require('assert');
var DateUtils = require('../lib/DateUtils');

describe('DateUtils', function () {

	it('should validate isLeapYear', function () {
		assert.equal(DateUtils.isLeapYear(1920), true);
		assert.equal(DateUtils.isLeapYear(2000), true);
		assert.equal(DateUtils.isLeapYear(2001), false);
		assert.equal(DateUtils.isLeapYear(2004), true);
	});

	it('should validate daysInMonth', function () {
		assert.equal(DateUtils.daysInMonth(new Date(1920, 1, 1)), 31);
		assert.equal(DateUtils.daysInMonth(new Date(1920, 2, 1)), 29);
		assert.equal(DateUtils.daysInMonth(new Date(1920, 3, 1)), 31);
		assert.equal(DateUtils.daysInMonth(new Date(1920, 4, 1)), 30);
		assert.equal(DateUtils.daysInMonth(new Date(1920, 5, 1)), 31);
		assert.equal(DateUtils.daysInMonth(new Date(1920, 6, 1)), 30);
		assert.equal(DateUtils.daysInMonth(new Date(1920, 7, 1)), 31);
		assert.equal(DateUtils.daysInMonth(new Date(1920, 8, 1)), 31);
		assert.equal(DateUtils.daysInMonth(new Date(1920, 9, 1)), 30);
		assert.equal(DateUtils.daysInMonth(new Date(1920, 10, 1)), 31);
		assert.equal(DateUtils.daysInMonth(new Date(1920, 11, 1)), 30);
		assert.equal(DateUtils.daysInMonth(new Date(1920, 12, 1)), 31);
	});

	it('should validate isocalendar', function () {
		assert.equal(DateUtils.isocalendar(new Date(2017, 10, 14))[1], 46);
	});

	it('should validate set', function () {
		var date = new Date(2001, 1, 29, 10, 45, 12);
		date = DateUtils.set(date, {hour: 0, minute: 0, second: 0});
		assert.equal(date.toISOString(), '2001-03-01T00:00:00.000Z');
	});

	it('should validate format', function () {
		let date = DateUtils.set(new Date(), {
			year: 2017, month: 10, day: 14, hour: 16, minute: 31, second: 56
		});
		assert.equal(DateUtils.format(date), '2017-11-14');
	});
});
