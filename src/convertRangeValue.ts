import _clamp from 'lodash/clamp';
/**
 * Convert the two range values without changing the position.
 *
 * @since 3.0.0
 * @category Number
 * @param {number} value The value to convert.
 * @param {number[]} range The original range.
 * @param {number[]} newRange The new range.
 * @returns {number} Returns the converted value.
 * @example
 *
 * convertRangeValue(1, [1, 10], [1, 100])
 * // => 1
 *
 * convertRangeValue(5, [1, 10], [1, 100])
 * // => 45
 *
 * convertRangeValue(8, [1, 10], [1, 100])
 * // => 78
 *
 */
function convertRangeValue(value: number, range: number[], newRange: number[]): number {
  value = _clamp(value, range[0], range[1]);
  const position = (value - range[0]) / (range[1] - range[0]);
  const value2 = (newRange[1] - newRange[0]) * position + newRange[0];
  return _clamp(value2, newRange[0], newRange[1]);
}

export default convertRangeValue;
