import isSameDay from './isSameDay';
import toDate from './toDate';

/**
 * Check if `value` is today.
 *
 * @since 2.1.0
 * @category Date
 * @param  {Date | string | number} value The value to check.
 * @returns {boolean} Returns `true` if `value` is today, else `false`.
 * @example
 *
 * isToday(new Date())
 * // => true
 *
 */
function isToday(value: Date | string | number): boolean {
  return isSameDay(toDate(value));
}

export default isToday;
