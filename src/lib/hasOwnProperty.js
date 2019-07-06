/**
 * 判断对象是否有某属性
 * @param {Object} obj 对象
 * @param {string} prop 属性名
 * @returns {boolean}
 */
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export default hasOwnProperty;
