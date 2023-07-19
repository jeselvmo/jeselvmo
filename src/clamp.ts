import _clamp from 'lodash/clamp';

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @since 2.1.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.round(4.006);
 * // => 4
 *
 * _.round(4.006, 2);
 * // => 4.01
 *
 * _.round(4060, -2);
 * // => 4100
 */
function clamp(number: number, lower: number, upper: number): number {
  return _clamp(number, lower, upper);
}

export default clamp;
