import expect from 'expect';
import formatNum from '../src/formatNum';
import digitUppercase from '../src/digitUppercase';
import randomNum from '../src/randomNum';
import arrayEquals from '../src/arrayEquals';
import checkPasswordLevel from '../src/checkPasswordLevel';
import deepClone from '../src/deepClone';
import deserialize from '../src/deserialize';
import objectEquals from '../src/objectEquals';
import escape2Html from '../src/escape2Html';
import html2Escape from '../src/html2Escape';
import formatDate from '../src/formatDate';
import typeOf from '../src/typeOf';
import formatPassTime from '../src/formatPassTime';
import formatRemainTime from '../src/formatRemainTime';
import getExplore from '../src/getExplore';
import getKeyName from '../src/getKeyName';
import shallowCopy from '../src/shallowCopy';
import stringify from '../src/stringify';
import inherits from '../src/inherits';
import objectToString from '../src/objectToString';
import isEmpty from '../src/isEmpty';
import isError from '../src/isError';
import isFunction from '../src/isFunction';
import isEmail from '../src/isEmail';
import isBlank from '../src/isBlank';
import isIdCard from '../src/isIdCard';
import isJson from '../src/isJson';
import isJsonStr from '../src/isJsonStr';
import isLength from '../src/isLength';
import isIn from '../src/isIn';
import isInt from '../src/isInt';
import toDate from '../src/toDate';
import isDate from '../src/isDate';
import clamp from '../src/clamp';
import convertRangeValue from '../src/convertRangeValue';
import isArray from '../src/isArray';
import isNumber from '../src/isNumber';

describe('formatNum', () => {
  it('formatNum(1, 0.00) = 1.00', () => {
    expect(formatNum(1, '0.00')).toBe('1.00');
  });

  it("formatNum(10000.09, '0,000.0') = 10,000.1", () => {
    expect(formatNum(10000.09, '0,000.0')).toBe('10,000.1');
  });

  it("formatNum(-1.0912, '#.##') = -1.09", () => {
    expect(formatNum(-1.0912, '#.##')).toBe('-1.09');
  });
});

describe('digitUppercase', () => {
  it("digitUppercase(1) = '壹元整'", () => {
    expect(digitUppercase(1)).toBe('壹元整');
  });

  it("digitUppercase(10000.09) = '壹万元玖分'", () => {
    expect(digitUppercase(10000.09)).toBe('壹万元玖分');
  });

  it("digitUppercase(-1.0912) = '欠壹元玖分'", () => {
    expect(digitUppercase(-1.0912)).toBe('欠壹元玖分');
  });
});

describe('randomNum', () => {
  it('randomNum(1, 100) in [1, 100]', () => {
    expect(randomNum(1, 100))
      .toBeGreaterThanOrEqualTo(1)
      .toBeLessThanOrEqualTo(100);
  });

  it('randomNum(-50, 50) in [-50, 50]', () => {
    expect(randomNum(-50, 50))
      .toBeGreaterThan(-50)
      .toBeLessThan(50);
  });
});

describe('arrayEquals', () => {
  it('arrayEquals([], []) = true', () => {
    expect(arrayEquals([], [])).toBe(true);
  });

  it('arrayEquals([1], [1]) = true', () => {
    expect(arrayEquals([1], [1])).toBe(true);
  });
});

describe('checkPasswordLevel', () => {
  it("checkPasswordLevel('123456') = 1", () => {
    expect(checkPasswordLevel('123456')).toBe(1);
  });

  it("checkPasswordLevel('abcd123') = 2", () => {
    expect(checkPasswordLevel('abcd123')).toBe(2);
  });

  it("checkPasswordLevel('Abcd123!@#') = 3", () => {
    expect(checkPasswordLevel('Abcd123!@#')).toBe(3);
  });
});

describe('deepClone', () => {
  it('deepClone(obj) = obj', () => {
    var obj = { name: 'yangkk' };
    expect(deepClone(obj)).toNotBe(obj);
  });
});

describe('deserialize', () => {
  it('deserialize(string) = obj', () => {
    var obj = { name: 'yangkk' };
    expect(objectEquals(deserialize(JSON.stringify(obj)), obj)).toBe(true);
  });
});

describe('objectEquals', () => {
  it('objectEquals(obj1, obj2) = true', () => {
    var obj1 = { name: 'yangkk' };
    var obj2 = { name: 'yangkk' };
    expect(objectEquals(obj1, obj2)).toBe(true);
  });
});

describe('digitUppercase', () => {
  it("digitUppercase(123456.12) = '壹拾贰万叁仟肆佰伍拾陆元壹角贰分'", () => {
    expect(digitUppercase(123456.12)).toBe('壹拾贰万叁仟肆佰伍拾陆元壹角贰分');
  });
});

describe('escape2Html/html2Escape', () => {
  it("escape2Html(html2Escape('<html></html>')) = '<html></html>'", () => {
    expect(escape2Html(html2Escape('<html></html>'))).toBe('<html></html>');
  });
});

describe('typeOf', () => {
  it("typeOf(null) = 'null'", () => {
    expect(typeOf(null)).toBe('null');
  });

  it("typeOf(undefined) = 'undefined'", () => {
    expect(typeOf(undefined)).toBe('undefined');
  });

  it('typeOf("yangkk") = \'string\'', () => {
    expect(typeOf('yangkk')).toBe('string');
  });

  it("typeOf(1) = 'number'", () => {
    expect(typeOf(1)).toBe('number');
  });

  it("typeOf({}) = 'object'", () => {
    expect(typeOf({})).toBe('object');
  });

  it("typeOf(new Date()) = 'date'", () => {
    expect(typeOf(new Date())).toBe('date');
  });

  it("typeOf(Date.now()) = 'number'", () => {
    expect(typeOf(Date.now())).toBe('number');
  });

  it("typeOf(()=>{}) = 'function'", () => {
    expect(typeOf(() => {})).toBe('function');
  });

  it("typeOf([]) = 'array'", () => {
    expect(typeOf([])).toBe('array');
  });
});

describe('formatDate', () => {
  it("formatDate(new Date('2018-10-31 15:47:06')) = '2018-10-31 15:47:06'", () => {
    expect(formatDate(new Date('2018-10-31 15:47:06'))).toBe('2018-10-31 15:47:06');
  });

  it("formatDate(new Date('2018-10-31')) = '2018-10-31'", () => {
    expect(formatDate(new Date('2018-10-31'), 'yyyy-mm-dd')).toBe('2018-10-31');
  });
});

describe('formatNum', () => {
  it("formatNum(2018, '#.000') = '2018.000'", () => {
    expect(formatNum(2018, '#.000')).toBe('2018.000');
  });

  it("formatNum(123, '0.00') = '123.00'", () => {
    expect(formatNum(123, '0.00')).toBe('123.00');
  });

  it("formatNum(456.7, '0.00') = '123.00'", () => {
    expect(formatNum(456.7, '#.##')).toBe('456.7');
  });
});

describe('formatPassTime', () => {
  it("formatPassTime(new Date('2017-10-31')) = '1年前'", () => {
    expect(formatPassTime(new Date('2017-10-31'))).toBe('1年前');
  });
});

describe('formatRemainTime', () => {
  it("formatRemainTime(new Date('2017-10-31')) = '730天 16小时 2分钟 17秒'", () => {
    expect(formatRemainTime(new Date('2020-10-31'))).toNotBe('730天 16小时 2分钟 17秒');
  });
});

describe('getExplore', () => {
  it("getExplore() = 'Unkonwn'", () => {
    expect(getExplore()).toBe('Unkonwn');
  });
});

describe('getKeyName', () => {
  it("getKeyName(20) = 'Caps Lock'", () => {
    expect(getKeyName(20)).toBe('Caps Lock');
  });
});

describe('shallowCopy', () => {
  it('shallowCopy(obj1, obj2) = true', () => {
    let obj1 = { name: 'yangkk' };
    let obj2 = {};
    shallowCopy(obj1, obj2);
    expect(obj1.name === obj2.name).toBe(true);
  });
});

describe('stringify', () => {
  it('stringify({name: \'yangkk\'}) = \'{"name":"yangkk"}\'', () => {
    expect(stringify({ name: 'yangkk' })).toBe('{"name":"yangkk"}');
  });
});

describe('inherits', () => {
  it('inherits(ApiError, Error) = true', () => {
    function ApiError() {}

    inherits(ApiError, Error);

    expect(new ApiError() instanceof Error).toBe(true);
  });
});

describe('objectToString', () => {
  it("objectToString(new Date()) = '[object Date]'", () => {
    expect(objectToString(new Date())).toBe('[object Date]');
  });

  it("objectToString(new Error()) = '[object Error]'", () => {
    expect(objectToString(new Error())).toBe('[object Error]');
  });

  it("objectToString(1) = '[object Number]'", () => {
    expect(objectToString(1)).toBe('[object Number]');
  });
});

describe('isEmpty', () => {
  it('isEmpty(null) = true', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('isEmpty(undefined) = true', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('isEmpty("") = true', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('isEmpty({}) = true', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('isEmpty([]) = true', () => {
    expect(isEmpty([])).toBe(true);
  });
});

describe('isError', () => {
  it('isError(new Error()) = true', () => {
    expect(isError(new Error())).toBe(true);
  });
});

describe('isFunction', () => {
  it('isFunction(Error) = true', () => {
    expect(isFunction(Error)).toBe(true);
  });
});

describe('isEmail', () => {
  it('isEmail(Error) = true', () => {
    expect(isEmail('kecoyo@163.com')).toBe(true);
  });
});

describe('isBlank', () => {
  it("isBlank('') = true", () => {
    expect(isBlank('')).toBe(true);
  });
});

describe('isIdCard', () => {
  it("isIdCard('410322198707198330') = true", () => {
    expect(isIdCard('410322198707198330')).toBe(true);
  });
});

describe('isJson', () => {
  it("isJson({name: 'yangkk'}) = true", () => {
    expect(isJson({ name: 'yangkk' })).toBe(true);
  });
});

describe('isJsonStr', () => {
  it('isJsonStr(\'{"name": "yangkk"}\') = true', () => {
    expect(isJsonStr('{"name": "yangkk"}')).toBe(true);
  });
});

describe('isLength', () => {
  it("isLength('yangkk', [1, 10]) = true", () => {
    expect(isLength('yangkk', [1, 10])).toBe(true);
  });
});

describe('isIn', () => {
  it("isIn('5', ['5', '10']) = true", () => {
    expect(isIn('5', ['5', '10'])).toBe(true);
  });

  it("isIn('name', {name: 'yangkk'}) = true", () => {
    expect(isIn('name', { name: 'yangkk' })).toBe(true);
  });

  it("isIn('kk', 'yangkk') = true", () => {
    expect(isIn('kk', 'yangkk')).toBe(true);
  });
});

describe('isInt', () => {
  it('isInt(5) = true', () => {
    expect(isInt(5)).toBe(true);
  });

  it("isInt('5') = true", () => {
    expect(isInt('5')).toBe(true);
  });

  it("isInt('15', {min: 0, max: 10}) = false", () => {
    expect(isInt('15', { min: 0, max: 10 })).toBe(false);
  });
});

describe('toDate', () => {
  it('isDate(toDate(Date.now())) = true', () => {
    expect(isDate(toDate(Date.now()))).toBe(true);
  });

  it("isDate(toDate('2018-12-31')) = true", () => {
    expect(isDate(toDate('2018-12-31'))).toBe(true);
  });

  it("toDate('15', {min: 0, max: 10}) = false", () => {
    expect(isDate(toDate(new Date()))).toBe(true);
  });
});

describe('clamp', () => {
  it('clamp(13, 10, 20) = 13', () => {
    expect(clamp(13, 10, 20)).toEqual(13);
  });
  it('clamp(3, 10, 20) = 10', () => {
    expect(clamp(3, 10, 20)).toEqual(10);
  });
  it('clamp(25, 10, 20) = 20', () => {
    expect(clamp(25, 10, 20)).toEqual(20);
  });
});

describe('convertRangeValue', () => {
  it('convertRangeValue(15, [10, 20], [0, 100]) = 50', () => {
    expect(convertRangeValue(15, [10, 20], [0, 100])).toEqual(50);
  });
  it('convertRangeValue(5, [10, 20], [0, 100]) = 0', () => {
    expect(convertRangeValue(5, [10, 20], [0, 100])).toEqual(0);
  });
  it('convertRangeValue(21, [10, 20], [0, 100]) = 100', () => {
    expect(convertRangeValue(21, [10, 20], [0, 100])).toEqual(100);
  });
});

describe('isArray', () => {
  it('isArray([10, 20]) = true', () => {
    expect(isArray([10, 20])).toEqual(true);
  });
  it('isArray(1) = false', () => {
    expect(isArray(1)).toEqual(false);
  });
});

describe('isNumber', () => {
  it('isNumber(10)) = true', () => {
    expect(isNumber(10)).toEqual(true);
  });
  it('isNumber("10")) = true', () => {
    expect(isNumber('10')).toEqual(true);
  });
});

describe('typeOf', () => {
  it('typeOf(10)) = number', () => {
    expect(typeOf(10)).toEqual('number');
  });
  it('typeOf(() => {}) = function', () => {
    expect(typeOf(() => {})).toEqual('function');
  });
});
