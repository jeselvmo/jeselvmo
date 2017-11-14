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
		var date = new Date(2000, 9, 16, 10, 45, 12);
		date = DateUtils.set(date, {hour: 0, minute: 0, second: 0});
		assert.equal(date.getYear(), 2000);
		assert.equal(date.getMonth(), 9);
		assert.equal(date.getDate(), 16);
		assert.equal(date.getHours(), 10);
		assert.equal(date.getMinutes(), 45);
		assert.equal(date.getSeconds(), 12);
		assert.equal(date.getMilliseconds(), 0);
	});
});
