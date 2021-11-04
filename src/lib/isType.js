import typeOf from './typeOf';

/**
 * 检查数据类型。
 * @param {Object} obj - 要检查的对象
 * @param {string} type - 类型，参考typeOf方法的返回值
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isType(1, 'Number');
 * //=> true
 *
 * jeselvmo.isType('', 'String');
 * //=> true
 *
 * jeselvmo.isType(new Date(), 'Date');
 * //=> true
 *
 */
function isType(obj, type) {
  return typeOf(obj) === type;
}

export default isType;
