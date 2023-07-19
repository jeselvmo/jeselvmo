/**
 * Format the elapsed time from `startTime`.
 *
 * @since 2.1.0
 * @category Date
 * @param  {Date} startTime The start time to calculate.
 * @return {string} Returns the formatted time.
 * @example
 *
 * formatPassTime(new Date())
 * // => "刚刚"
 *
 * formatPassTime(new Date(1987,6,19))
 * // => "32年前"
 *
 * formatPassTime(new Date()- 10*60*1000)
 * // => "9分钟前"
 */
function formatPassTime(startTime: Date): string {
  const currentTime = new Date();
  const time = currentTime.getTime() - startTime.getTime();
  const day = Math.floor(time / (1000 * 60 * 60 * 24));
  const hour = Math.floor(time / (1000 * 60 * 60));
  const min = Math.floor(time / (1000 * 60));
  const month = Math.floor(day / 30);
  const year = Math.floor(month / 12);
  if (year) return year + '年前';
  if (month) return month + '个月前';
  if (day) return day + '天前';
  if (hour) return hour + '小时前';
  if (min) return min + '分钟前';
  return '刚刚';
}

export default formatPassTime;
