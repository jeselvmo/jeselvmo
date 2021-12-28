import format from './format';

const array = [
  { key: 'd', name: 'day', chinese: '%d天', symbol: '%d ' },
  { key: 'h', name: 'hour', chinese: '%d小时', symbol: '%02d:' },
  { key: 'm', name: 'minute', chinese: '%d分钟', symbol: '%02d:' },
  { key: 's', name: 'second', chinese: '%d秒', symbol: '%02d.' },
  { key: 'ms', name: 'millisecond', chinese: '%d毫秒', symbol: '%03d ' },
];

const patterns = ['chinese', 'symbol'];

const levels = ['day', 'hour', 'minute', 'second', 'millisecond'];

function formatChineseStyle(data, options) {
  const { max, min, showEmpty } = options;

  let str = '';
  let start = false;

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (max === item.name) {
      start = true;
      str = showEmpty || data[item.name] ? format(item.chinese, data[item.name]) : '';
    } else if (start) {
      str += showEmpty || data[item.key] || str ? format(item.chinese, data[item.key]) : '';
    }
    if (min === item.name) {
      break;
    }
  }

  return str;
}

function formatSymbolStyle(data, options) {
  const { max, min, showEmpty } = options;

  let str = '';
  let start = false;

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (max === item.name) {
      start = true;
      str = showEmpty || data[item.name] ? format(item.symbol, data[item.name]) : '';
    } else if (start) {
      str += showEmpty || data[item.key] || str ? format(item.symbol, data[item.key]) : '';
    }
    if (min === item.name) {
      break;
    }
  }

  return str ? str.substring(0, str.length - 1) : '';
}

/**
 *
 * 格式化时长。
 * @param  {number} time  时长，单位：毫秒
 * @param  {Object} options  选项：
 * @param  {string} options.pattern     样式，默认：chinese，取值范围：['chinese', 'symbol']。
 * @param  {string} options.max         最大级别，默认：hour，取值范围：['day', 'hour', 'minute', 'second', 'millisecond']。
 * @param  {string} options.min         最小级别，默认：second，取值范围：['day', 'hour', 'minute', 'second', 'millisecond']。
 * @param  {boolean} options.showEmpty  是否显示级别，默认：true。
 * @param  {function} options.custom    自定义格式化
 * @return {string} 返回格式化后的字符串
 *
 * @example
 *
 * jeselvmo.formatDuration(1585116);
 * // => "0小时26分钟25秒"
 *
 * jeselvmo.formatDuration(1585116, { pattern: 'symbol' });
 * // => "00:26:25"
 *
 * jeselvmo.formatDuration(1585116, { pattern: 'symbol', max: 'minute', min: 'second' });
 * // => "26:25"
 *
 * jeselvmo.formatDuration(1585116, { custom: (data) => data });
 * // =>  {d: 0, h: 0, m: 26, s: 25, ms: 116, ...}
 *
 *
 */
function formatDuration(time, options) {
  const data = {
    d: 0, // 天
    h: 0, // 小时
    m: 0, // 分钟
    s: 0, // 秒
    ms: 0, // 毫秒
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  };

  if (time >= 0) {
    data.d = Math.floor(time / 1000 / 3600 / 24);
    data.h = Math.floor((time / 1000 / 60 / 60) % 24);
    data.m = Math.floor((time / 1000 / 60) % 60);
    data.s = Math.floor((time / 1000) % 60);
    data.ms = Math.floor(time % 1000);
    data.day = Math.floor(time / 1000 / 60 / 60 / 24);
    data.hour = Math.floor(time / 1000 / 60 / 60);
    data.minute = Math.floor(time / 1000 / 60);
    data.second = Math.floor(time / 1000);
    data.millisecond = time;
  }

  const defaultOptions = {
    pattern: 'chinese',
    max: 'hour',
    min: 'second',
    showEmpty: true,
  };

  options = Object.assign({}, defaultOptions, options || {});

  if (!patterns.includes(options.pattern)) {
    throw new Error('[options.style] Parameter error.');
  }

  if (!levels.includes(options.max)) {
    throw new Error('[options.style] Parameter error.');
  }

  if (!levels.includes(options.min)) {
    throw new Error('[options.style] Parameter error.');
  }

  const { pattern, custom } = options;

  if (custom) {
    return custom(data);
  } else {
    switch (pattern) {
      case 'chinese':
        return formatChineseStyle(data, options);
      case 'symbol':
        return formatSymbolStyle(data, options);
      default:
        break;
    }
  }
}

export default formatDuration;
