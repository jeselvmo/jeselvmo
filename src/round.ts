import _round from 'lodash/round';

/**
 * Computes `number` rounded to `precision`.
 *
 * @since 3.0.0
 * @category Number
 * @param {number} number The number to round.
 * @param {number} [precision=0] The precision to round to.
 * @returns {number} Returns the rounded number.
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
function round(n: number, precision?: number): number {
  return _round(n, precision);
}

export default round;
