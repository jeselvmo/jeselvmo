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
function retry<T>(fn, times): (...args: any[]) => Promise<T> {
  return async function (this: any, ...args: any[]) {
    let count = 0;
    let error = null;
    do {
      try {
        // if (count > 0) {
        //   console.log('retry:', count);
        // }
        return await fn.apply(this, args);
      } catch (err) {
        error = err;
        count++;
      }
    } while (count < times);

    throw error;
  };
}

export default retry;
