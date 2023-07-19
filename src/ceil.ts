import _ceil from 'lodash/ceil';

/**
 * Computes `number` rounded up to `precision`.
 *
 * @since 2.1.0
 * @category Number
 * @param {number} number The number to round up.
 * @param {number} [precision=0] The precision to round up to.
 * @returns {number} Returns the rounded up number.
 * @example
 *
 * _.ceil(4.006);
 * // => 5
 *
 * _.ceil(6.004, 2);
 * // => 6.01
 *
 * _.ceil(6040, -2);
 * // => 6100
 */
function ceil(n: number, precision?: number): number {
  return _ceil(n, precision);
}

export default ceil;
