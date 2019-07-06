/**
 *
 * @desc 是否为闰年
 * @param {Number} year
 * @returns {Boolean}
 */
function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }
  return false;
}

export default isLeapYear;
