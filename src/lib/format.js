/* eslint-disable no-unused-vars */
import formatDate from './formatDate';

const regex = /%(\d+\$)?([-#+ 0,(\<]*)?(\d+)?(\.\d+)?([tT])?([a-zA-Z%])/gm;

function getValue(result, index, args) {
  if (result[2] && result[2].includes('<')) {
    index = index - 1;
  }
  if (result[1]) {
    index = parseInt(result[1]);
  }
  return args[index];
}

function repeat(n, char = ' ') {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += char;
  }
  return str;
}

function formatString(content, result, index, args) {
  let value = String(getValue(result, index, args));
  content = content.replace(result[0], value);
  return content;
}

function formatChar(content, result, index, args) {
  let value = String(getValue(result, index, args));
  value = value.length > 0 ? value[0] : '';
  content = content.replace(result[0], value);
  return content;
}

function formatBoolean(content, result, index, args) {
  let value = Boolean(getValue(result, index, args));
  content = content.replace(result[0], value);
  return content;
}

function formatNumber(content, result, index, args) {
  let value = parseInt(getValue(result, index, args));
  let plus = ''; // 加号
  let add = ''; // 补

  if (isNaN(value)) {
    value = 0;
  }

  value = value.toString(10);

  if (result[2] && result[2].includes('+') && parseInt(value) >= 0) {
    plus = '+';
  }

  if (result[3]) {
    let count = result[3] - value.length - plus.length;
    if (count > 0) {
      add = repeat(count); // 补空格
      if (result[2] && result[2].includes('0')) {
        add = add.replaceAll(' ', '0'); // 补0
      }
    }
  }

  if (result[2] && result[2].includes('-')) {
    value = plus + value + add;
  } else if (result[2] && result[2].includes('0')) {
    value = plus + add + value;
  } else {
    value = add + plus + value;
  }

  content = content.replace(result[0], value);
  return content;
}

function formatHex(content, result, index, args) {
  let value = parseInt(getValue(result, index, args));

  if (isNaN(value)) {
    value = 0;
  }

  value = value.toString(16).toUpperCase();

  content = content.replace(result[0], value);
  return content;
}

function formatOctal(content, result, index, args) {
  let value = parseInt(getValue(result, index, args));

  if (isNaN(value)) {
    value = 0;
  }

  value = value.toString(8);

  content = content.replace(result[0], value);
  return content;
}

function formatFloat(content, result, index, args) {
  let value = parseFloat(getValue(result, index, args));
  let plus = ''; // 加号
  let add = ''; // 补
  let decimal = 6; // 小数数位

  if (isNaN(value)) {
    value = 0;
  }

  if (result[4]) {
    decimal = parseInt(result[4].substring(1));
    value = value.toFixed(decimal);
  }

  value = value.toString(10);

  if (result[2] && result[2].includes('+') && parseFloat(value) >= 0) {
    plus = '+';
  }

  if (result[2] && result[2].includes(',')) {
    value = value.split('.');
    // value[0] = value[0].replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');
    value[0] = parseInt(value[0]).toLocaleString();
    value = value.join('.');
  }

  if (result[3]) {
    let count = result[3] - value.length - plus.length;
    if (count > 0) {
      add = repeat(count); // 补空格
      if (result[2] && result[2].includes('0')) {
        add = add.replaceAll(' ', '0'); // 补0
      }
    }
  }

  if (result[2] && result[2].includes('-')) {
    value = plus + value + add;
  } else if (result[2] && result[2].includes('0')) {
    value = plus + add + value;
  } else {
    value = add + plus + value;
  }

  content = content.replace(result[0], value);
  return content;
}

function formatEnter(content, result, index, args) {
  let value = '\n';
  content = content.replace(result[0], value);
  return content;
}

function formatPercent(content, result, index, args) {
  let value = '%';
  content = content.replace(result[0], value);
  return content;
}

function formatTime(content, result, index, args) {
  let value = getValue(result, index, args);
  switch (result[6]) {
    case 'c':
      value = value.toUTCString();
      break;
    case 'F':
      value = formatDate(value, 'YYYY-MM-DD HH:mm:ss');
      break;
    case 'D':
      value = formatDate(value, 'YYYY-MM-DD');
      break;
    case 'T':
      value = formatDate(value, 'HH:mm:ss');
      break;
    case 'R':
      value = formatDate(value, 'HH:mm');
      break;
    default:
      value = value.toLocaleString();
      break;
  }

  content = content.replace(result[0], value);
  return content;
}

/**
 *
 * 仿Java的模板字符串格式化。
 * @param  {string} str 模板字符串，不同转换符实现不同数据类型到字符串的转换，具体可以参照Java中String.format()<br/>
 *                  %s: 字符串类型<br/>
 *                  %c: 字符类型<br/>
 *                  %b: 布尔类型<br/>
 *                  %d: 整数类型（十进制）<br/>
 *                  %x: 整数类型（十六进制）<br/>
 *                  %o: 整数类型（八进制）<br/>
 *                  %f: 浮点类型<br/>
 *                  %%: 百分比类型<br/>
 *                  %n: 换行符<br/>
 *                  %tx: 日期与时间类型（x代表不同的日期与时间转换符<br/>
 * @param  {...} args 替换的参数，可以传多个
 * @return {string} 返回格式化后的字符串
 *
 * @example
 *
 * jeselvmo.format('姓名：%s，年龄：%d', '杨可可', 35); //=> '姓名：杨可可，年龄：35'
 * jeselvmo.format('%s', 杨可可); //=> "杨可可"
 * jeselvmo.format('%2$s', yang, keke); //=> "keke"
 * jeselvmo.format('%d', 9); //=> "9"
 * jeselvmo.format('%2$d', 9, 10); //=> "10"
 * jeselvmo.format('%5d', 9); //=> "    9"
 * jeselvmo.format('%05d', 9); //=> "00009"
 * jeselvmo.format('%05d', 99999999); //=> "99999999"
 * jeselvmo.format('%+d', 9); //=> "+9"
 * jeselvmo.format('%+5d', 9); //=> "   +9"
 * jeselvmo.format('%+05d', 9); //=> "+0009"
 * jeselvmo.format('%-d', 9); //=> "9"
 * jeselvmo.format('%-5d', 9); //=> "9    "
 * jeselvmo.format('%-05d', 9); //=> "90000"
 * jeselvmo.format('%- 5d', 9); //=> "9    "
 * jeselvmo.format('%f', 9); //=> "9"
 * jeselvmo.format('%2$f', 9, 10); //=> "10"
 * jeselvmo.format('%10.3f', 9); //=> "     9.000"
 * jeselvmo.format('%010.3f', 9); //=> "000009.000"
 * jeselvmo.format('%+10.3f', 9); //=> "    +9.000"
 * jeselvmo.format('%+010.3f', 9); //=> "+00009.000"
 * jeselvmo.format('%-10.3f', 9); //=> "9.000     "
 * jeselvmo.format('%-+10.3f', 9); //=> "+9.000    "
 * jeselvmo.format('%+-10.3f', 9); //=> "+9.000    "
 * jeselvmo.format('%,f', 9999999.9999); //=> "9,999,999.9999"
 * jeselvmo.format('%,.0f', 9999999.9999); //=> "10,000,000"
 * jeselvmo.format('%,10.0f', 9999999.9999); //=> "10,000,000"
 * jeselvmo.format('%+,15.2f', 9999999.9999); //=> " +10,000,000.00"
 * jeselvmo.format('%f %<+,15.2f', 9999999.9999); //=> "9999999.9999  +10,000,000.00"
 * jeselvmo.format('%%'); //=> "%"
 * jeselvmo.format('%c', yang); //=> "y"
 * jeselvmo.format('%b', 0); //=> "false"
 * jeselvmo.format('%b', 1); //=> "true"
 * jeselvmo.format('%b', ''); //=> "false"
 * jeselvmo.format('%b', null); //=> "false"
 * jeselvmo.format('%b', undefined); //=> "false"
 * jeselvmo.format('%b', []); //=> "true"
 * jeselvmo.format('%t', new Date()); //=> "2021/12/24 下午12:05:52"
 * jeselvmo.format('%tc', new Date()); //=> "Fri, 24 Dec 2021 04:05:52 GMT"
 * jeselvmo.format('%tF', new Date()); //=> "2021-12-24 12:05:52"
 * jeselvmo.format('%tD', new Date()); //=> "2021-12-24"
 * jeselvmo.format('%tT', new Date()); //=> "12:05:52"
 * jeselvmo.format('%tR', new Date()); //=> "12:05"
 *
 */
function format(str, ...args) {
  let result = null;
  let index = 0;
  let content = str;
  while ((result = regex.exec(str))) {
    index++;
    // console.log('🚀 ~ format ~ result', index, result);
    let key = `${result[5] || ''}${result[6] || ''}`;
    switch (key) {
      case 's':
        content = formatString(content, result, index, arguments);
        break;
      case 'c':
        content = formatChar(content, result, index, arguments);
        break;
      case 'b':
        content = formatBoolean(content, result, index, arguments);
        break;
      case 'd':
        content = formatNumber(content, result, index, arguments);
        break;
      case 'f':
        content = formatFloat(content, result, index, arguments);
        break;
      case 'x':
        content = formatHex(content, result, index, arguments);
        break;
      case 'o':
        content = formatOctal(content, result, index, arguments);
        break;
      case 't':
      case 'tc':
      case 'tF':
      case 'tD':
      case 'tr':
      case 'tT':
      case 'tR':
        content = formatTime(content, result, index, arguments);
        break;
      case 'n':
        content = formatEnter(content, result, index, arguments);
        break;
      case '%':
        content = formatPercent(content, result, index, arguments);
        break;
      default:
        break;
    }
  }
  return content;
}

export default format;
