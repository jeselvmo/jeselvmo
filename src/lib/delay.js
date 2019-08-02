/**
 * 延迟执行。
 * @param {number} time - 时间（毫秒）
 * @returns {Promise} promise
 *
 * @example
 *
 * jeselvmo.delay(1000).then(()=>{
 *   // TODO 延迟1秒执行
 * });
 */
export default function delay(time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
