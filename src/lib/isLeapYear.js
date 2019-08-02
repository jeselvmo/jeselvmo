/**
 *
 * 检查是否为闰年。
 * @param {number} year - 年份。
 * @return {boolean} 真/假
 */
export default function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }
  return false;
}
