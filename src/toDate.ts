import dayjs from 'dayjs';

/**
 * Converts `value` to a date.
 *
 * @since 2.1.0
 * @category Lang
 * @param {Date | string | number} value The value to convert.
 * @returns {Date} Returns the converted date.
 * @example
 *
 * toDate({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * toDate('abc');
 * // => ['a', 'b', 'c']
 *
 * toDate(1);
 * // => []
 *
 * toDate(null);
 * // => []
 */
function toDate(value?: Date | number | string): Date {
  let date = value || new Date();

  if (typeof date === 'number') {
    const len = `${date}`.length;
    if (len === 10) {
      date = new Date(date * 1000);
    } else {
      date = new Date(date);
    }
  } else if (typeof date === 'string') {
    date = new Date(date);
  }

  return dayjs(date).toDate();
}

export default toDate;
