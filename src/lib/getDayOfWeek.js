/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date = new Date()) {
  let dow = date.getDay();
  if (dow === 0) {
    dow = 7;
  }
  return dow;
}

export default getDayOfWeek;
