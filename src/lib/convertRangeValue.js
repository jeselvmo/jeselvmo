import clamp from './clamp';
/**
 * 转换两个范围值，位置比不变。
 * @param {number} value 值
 * @param {Array} range 最小值
 * @param {Array} range2 最大值
 * @returns {number} 结果值
 */
export default function convertRangeValue(value, range, range2) {
  value = clamp(value, range[0], range[1]);
  let position = (value - range[0]) / (range[1] - range[0]);
  let value2 = (range2[1] - range2[0]) * position + range2[0];
  return clamp(value2, range2[0], range2[1]);
}
