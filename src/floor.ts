import _floor from 'lodash/floor';

/**
 * Computes `number` rounded down to `precision`.
 *
 * @since 3.0.0
 * @category Number
 * @param {number} number The number to round down.
 * @param {number} [precision=0] The precision to round down to.
 * @returns {number} Returns the rounded down number.
 * @example
 *
 * _.floor(4.006);
 * // => 4
 *
 * _.floor(0.046, 2);
 * // => 0.04
 *
 * _.floor(4060, -2);
 * // => 4000
 */
function floor(n: number, precision?: number): number {
  return _floor(n, precision);
}

export default floor;
