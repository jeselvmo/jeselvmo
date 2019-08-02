/**
 * Get the week number
 *
 * @param  {Date} date - 日期
 * @return {number}
 *
 * @example
 *
 * jeselvmo.getWeek(new Date(2019,7,2));
 * //=> 31
 *
 * jeselvmo.getWeek(new Date(2019,7,5));
 * //=> 32
 */
export default function getWeek(date = new Date()) {
  // Remove time components of date
  let targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  let firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occurred and correct for it
  let ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  let weekDiff = (targetThursday - firstThursday) / (86400000 * 7);
  return 1 + Math.floor(weekDiff);
}
