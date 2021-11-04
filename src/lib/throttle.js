/* eslint-disable prefer-rest-params */

/**
 * 节流。预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期。
 * @param  {function} fn  执行的函数
 * @param  {number} delay 多少秒之内执行一次
 * @return {function}    新函数
 *
 * @example
 *
 * const onresize = (e) => {
 *   // 处理
 * };
 *
 * window.addEventListener("resize", jeselvmo.throttle(onresize, 1000));
 *
 */
function throttle(fn, delay) {
  let prev = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(context, args);
      prev = Date.now();
    }
  };
}

export default throttle;
