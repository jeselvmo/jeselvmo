/**
 *
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to
 * @param {Number} duration
 */
function scrollTo(to, duration) {
  if (duration < 0) {
    this.setScrollTop(to);
    return;
  }
  let diff = to - this.getScrollTop();
  if (diff === 0) return;
  let step = (diff / duration) * 10;
  requestAnimationFrame(() => {
    if (Math.abs(step) > Math.abs(diff)) {
      this.setScrollTop(this.getScrollTop() + diff);
      return;
    }
    this.setScrollTop(this.getScrollTop() + step);
    if ((diff > 0 && this.getScrollTop() >= to) || (diff < 0 && this.getScrollTop() <= to)) {
      return;
    }
    this.scrollTo(to, duration - 16);
  });
}

export default scrollTo;
