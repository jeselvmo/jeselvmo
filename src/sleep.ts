/**
 * Take a break before executing.
 *
 * @since 3.0.0
 * @category Utils
 * @param {number} time The time to sleep, the unit: millisecond, default: 1000.
 * @returns {Promise} Returns the promise.
 *
 * @example
 *
 * sleep(1000).then(()=>{
 *   // TODO sleep 1 second, then execute.
 * })
 */
function sleep(time: number = 1000): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export default sleep;
