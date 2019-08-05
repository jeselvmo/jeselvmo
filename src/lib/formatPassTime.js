/* eslint-disable prefer-template,radix */
/**
 * 格式化${startTime}距现在的已过时间
 * @param  {Date} startTime 距离日期。
 * @return {string} 返回过去多长时间了。
 *
 * @example
 *
 * jeselvmo.formatPassTime(new Date());
 * //=> "刚刚"
 *
 * jeselvmo.formatPassTime(new Date(1987,6,19));
 * //=> "32年前"
 *
 * jeselvmo.formatPassTime(new Date()- 10*60*1000);
 * //=> "9分钟前"
 */
function formatPassTime(startTime) {
  let currentTime = Date.parse(new Date()),
    time = currentTime - startTime,
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (year) return year + '年前';
  if (month) return month + '个月前';
  if (day) return day + '天前';
  if (hour) return hour + '小时前';
  if (min) return min + '分钟前';
  return '刚刚';
}

export default formatPassTime;
