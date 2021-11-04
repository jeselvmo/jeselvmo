/* eslint-disable prefer-rest-params */

/**
 * 防抖动。当调用动作n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间。
 * @param  {function} fn      执行的函数
 * @param  {number}   delay   多少秒之后执行
 * @param  {boolean}   immediate  是否立即执行，true: 先执行，false：后执行
 * @returns {function} 新函数
 *
 * @example
 *
 * const onresize = (e) => {
 *   // 处理
 * };
 *
 * window.addEventListener("resize", jeselvmo.debounce(onresize, 500, true));
 *
 */
function debounce(fn, delay, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) fn.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
    if (callNow) fn.apply(context, args);
  };
}

export default debounce;
