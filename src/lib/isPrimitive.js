/* eslint-disable operator-linebreak */
/**
 * 检查是不是原始数据类型。
 * @param {Object} obj - 要检查的对象。
 * @returns {boolean} 真/假。
 *
 * @example
 *
 * jeselvmo.isPrimitive(1);
 * //=> true
 * jeselvmo.isPrimitive({});
 * //=> false
 * jeselvmo.isPrimitive(new Date());
 * //=> false
 * jeselvmo.isPrimitive(null);
 * //=> true
 * jeselvmo.isPrimitive(undefined);
 * //=> true
 * jeselvmo.isPrimitive('');
 * //=> true
 */
function isPrimitive(obj) {
  return (
    typeof obj === 'boolean' ||
    typeof obj === 'number' ||
    typeof obj === 'string' ||
    typeof obj === 'symbol' ||
    obj === null ||
    obj === undefined
  );
}

export default isPrimitive;
