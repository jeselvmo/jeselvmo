var Pinyin = require('../lib/Pinyin');
var NumberUtils = require('../lib/NumberUtils');
var DateUtils = require('../lib/DateUtils');

console.log(Pinyin.convert('朝阳区'));
console.log(NumberUtils.format('#.00', 10));
console.log(DateUtils.format(new Date()));
console.log(DateUtils.format(new Date(), DateUtils.patterns.datetime));
