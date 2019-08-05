import assertString from './util/assertString';

const lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
const long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

/**
 * 检查是否是经纬度坐标。
 * @param {string} str - 要检查的字符串。
 * @returns {boolean} 真/假。
 */
function isLatLong(str) {
  assertString(str);
  if (!str.includes(',')) return false;
  const pair = str.split(',');
  return lat.test(pair[0]) && long.test(pair[1]);
}

export default isLatLong;
