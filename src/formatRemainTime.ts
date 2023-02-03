/**
 * Format the remaining time from `endTime`.
 *
 * @since 3.0.0
 * @category Date
 * @param  {Date} endTime The end time to calculate.
 * @return {string} Returns the formatted remaining time.
 * @example
 *
 * formatRemainTime(new Date().getTime()+100000000)
 * // => "1天 3小时 46分钟 40秒"
 *
 */
function formatRemainTime(endTime: Date): string {
  const startDate = new Date(); // 开始时间
  const endDate = new Date(endTime); // 结束时间
  const t = endDate.getTime() - startDate.getTime(); // 时间差
  let d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return `${d}天 ${h}小时 ${m}分钟 ${s}秒`;
}

export default formatRemainTime;
