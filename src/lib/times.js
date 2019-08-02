// Used as references for various `Number` constants.
const MAX_SAFE_INTEGER = 9007199254740991;
// Used as references for the maximum length and index of an array.
const MAX_ARRAY_LENGTH = 4294967295;

/**
 * 调用 iteratee n 次，每次调用返回的结果存入到数组中。 iteratee 调用入1个参数： (index)。
 * @param {number} n 调用 iteratee 的次数。。
 * @param {function} iteratee 每次迭代调用的函数。
 * @returns {Array} 返回调用结果的数组。
 *
 * @example
 *
 * jeselvmo.times(10, String);
 * //=> ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 *
 * jeselvmo.times(10, Number);
 * //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 *
 * jeselvmo.times(10, (i)=>{return 'a'+i});
 * //=> ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"]
 */
export default function times(n, iteratee) {
  if (n < 1 || n > MAX_SAFE_INTEGER) {
    return [];
  }
  let index = -1;
  const length = Math.min(n, MAX_ARRAY_LENGTH);
  const result = new Array(length);
  while (++index < length) {
    result[index] = iteratee(index);
  }
  index = MAX_ARRAY_LENGTH;
  n -= MAX_ARRAY_LENGTH;
  while (++index < n) {
    iteratee(index);
  }
  return result;
}
