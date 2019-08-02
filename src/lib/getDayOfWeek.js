/**
 * 获取日期为周期中第几天。
 *
 * @param  {Date} date - 日期
 * @return {number} 索号
 *
 * @example
 *
 * jeselvmo.getDayOfWeek(new Date(2019,7,2));
 * //=> 5 (周五)
 *
 * jeselvmo.getDayOfWeek(new Date(2019,7,4));
 * //=> 7 (周日)
 *
 * jeselvmo.getDayOfWeek(new Date(2019,7,5));
 * //=> 1 (周一)
 *
 */
export default function getDayOfWeek(date = new Date()) {
  let dow = date.getDay();
  if (dow === 0) {
    dow = 7;
  }
  return dow;
}
