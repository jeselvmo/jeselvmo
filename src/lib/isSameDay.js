/**
 * 判断是否为同一天。
 * @param  {Date} date1 日期1
 * @param  {Date} [date2] 日期2，默认值：当天
 * @returns {boolean} 真/假。
 */
function isSameDay(date1, date2 = new Date()) {
  let date1_year = date1.getFullYear(),
    date1_month = date1.getMonth() + 1,
    date1_date = date1.getDate();

  let date2_year = date2.getFullYear(),
    date2_month = date2.getMonth() + 1,
    date2_date = date2.getDate();

  return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;
}

export default isSameDay;
