/**
 * 获取对象类型，Sting/Number/Object/Array...
 * @param {*} o object
 * @returns {string} type
 */
function kindOf(o) {
  return Object.prototype.toString.call(o).slice(8, -1);
}

export default kindOf;
