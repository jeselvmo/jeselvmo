/**
 *
 * Check if `year` is a leap year.
 *
 * @since 2.1.0
 * @category Date
 * @param {number} year The year to check.
 * @returns {boolean} Returns `true` if `year` is a leap year, else 'false'.
 * @example
 *
 * isLeapYear(2000)
 * // => true
 */
function isLeapYear(year: number): boolean {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }
  return false;
}

export default isLeapYear;
