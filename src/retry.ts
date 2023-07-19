/**
 * Retrying n times after failure.
 *
 * @since 3.0.0
 * @category Utils
 * @param {Function} fn The function to retry.
 * @param {number} times The number of times to retry.
 * @returns {string} Returns the new function.
 * @example
 *
 * function fn(a, b) {
 *    throw new Error('msg')
 * }
 *
 * const fn2 = retry(fn, 3);
 * fn2(a, b);
 * // => Promise<Object>
 *
 */
function retry(fn, times) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      function attempt() {
        fn(...args)
          .then(resolve)
          .catch(err => {
            console.log(`还有 ${times} 次尝试`);
            if (0 == times) {
              reject(err);
            } else {
              times--;
              setTimeout(() => {
                attempt();
              }, 1000);
            }
          });
      }
      attempt();
    });
  };
}

export default retry;
