/**
 *
 * @desc 获取滚动条距顶部的距离
 */
function getScrollTop() {
  // eslint-disable-next-line max-len
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

export default getScrollTop;
