/**
 * 夹紧，数值范围限定。如果在[min, max]范围内，取值n；如果小于min，取值min；如果大于max, 取值max。
 * @param {number} n 值。
 * @param {number} min 最小值。
 * @param {number} max 最大值。
 * @returns {number} 结果值。
 *
 * @example
 *
 * jeselvmo.clamp(8, 10, 20);
 * //=> 10
 *
 * jeselvmo.clamp(15, 10, 20);
 * //=> 15
 *
 * jeselvmo.clamp(22, 10, 20);
 * //=> 20
 *
 */
function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

export default clamp;
