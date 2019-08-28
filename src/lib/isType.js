import typeOf from './typeOf';

/**
 * 检查数据类型
 * @param {Object} obj - 要检查的对象
 * @param {string} type - 类型
 * @returns {boolean} 真/假。
 */
function isType(obj, type) {
  return typeOf(obj) === type;
}

export default isType;
