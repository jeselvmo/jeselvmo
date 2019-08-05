/**
 * 获取对象类型，Sting/Number/Object/Array...
 * @param {Object} obj - 任意对象。
 * @returns {string} 返回类型。
 */
function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

export default typeOf;
