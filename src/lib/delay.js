/**
 * 延迟执行，setTimeout转Promise异步。
 * @param {number} time - 时间（毫秒）
 * @returns {Promise} promise。
 *
 * @example
 *
 * jeselvmo.delay(1000).then(()=>{
 *   // TODO 延迟1秒执行
 * });
 */
function delay(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export default delay;
