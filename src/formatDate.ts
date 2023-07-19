import dayjs from 'dayjs';
import toDate from './toDate';

/**
 * Get the formatted date according to the string of tokens passed in.
 *
 * @since 2.1.0
 * @category Date
 * @param {Date | string | number} [value] The date to format, default: current date.
 * @param {string} [template] The template to formatted, default: 'YYYY-MM-DD HH:mm:ss'.
 * @returns {string} Get the formatted string.
 * @example
 *
 * formatDate()
 * // => "2019-08-02 11:51:34"
 *
 * formatDate(new Date())
 * // => "2019-08-02 11:51:20"
 *
 * formatDate(1635927338667, "YYYY-MM-DD HH:mm:ss")
 * // => "2019-08-02 11:53:37"
 *
 * formatDate(1635927338)
 * // => '2019-08-02 11:53:37'
 *
 * formatDate(1635927338, 'YYYY-MM-DD')
 * // => '2021-11-03'
 */
function formatDate(value?: Date | string | number, template?: string): string {
  template = template || 'YYYY-MM-DD HH:mm:ss';
  return dayjs(toDate(value)).format(template);
}

export default formatDate;
