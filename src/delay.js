/**
 * 延迟执行
 * @param {Number} time 时间（毫秒）
 * @return {Promise} promise
 */
function delay(time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export default delay;
