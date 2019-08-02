/**
 * 夹紧，数值范围限定。
 * 如果在[min, max]范围内，取值n;
 * 如果小于min，取值min;
 * 如果大于max, 取值max;
 * @param {number} n 值
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 结果值
 */
export default function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}
