/**
 *
 * 格式化现在距${endTime}的剩余时间。
 * @param  {Date} endTime 距离日期
 * @return {string} 返回剩余时间格式化后的字符串
 *
 * @example
 *
 * jeselvmo.formatRemainTime(new Date().getTime()+100000000);
 * //=> "1天 3小时 46分钟 40秒"
 *
 */
function formatRemainTime(endTime) {
  let startDate = new Date(); // 开始时间
  let endDate = new Date(endTime); // 结束时间
  let t = endDate.getTime() - startDate.getTime(); // 时间差
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
