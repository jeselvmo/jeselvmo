/**
 * Check if the two dates are the same day.
 *
 * @since 2.1.0
 * @category Date
 * @param  {Date} date1 The first date to check.
 * @param  {Date} [date2] The second date to check, default: current date.
 * @returns {boolean} Returns `true` if the two dates are the same day, else `false`.
 * @example
 *
 * isSameDay(new Date(), new Date())
 * // => true
 */
function isSameDay(date1: Date, date2: Date = new Date()): boolean {
  const date1_year = date1.getFullYear();
  const date1_month = date1.getMonth() + 1;
  const date1_date = date1.getDate();
  const date2_year = date2.getFullYear();
  const date2_month = date2.getMonth() + 1;
  const date2_date = date2.getDate();
  return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;
}

export default isSameDay;
