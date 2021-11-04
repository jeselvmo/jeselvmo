/**
 * 获取对象类型，Sting/Number/Object/Array...
 * @param {Object} obj - 任意对象
 * @returns {string} 返回类型字符串
 *
 * @example
 *
 * jeselvmo.typeOf('')
 * //=> 'String'
 *
 * jeselvmo.typeOf(1)
 * //=> 'Number'
 *
 * jeselvmo.typeOf(true)
 * //=> 'Boolean'
 *
 * jeselvmo.typeOf(Date.now())
 * //=> 'Number'
 *
 * jeselvmo.typeOf(new Date())
 * //=> 'Date'
 *
 * jeselvmo.typeOf(null)
 * //=> 'Null'
 *
 * jeselvmo.typeOf(undefined)
 * //=> 'Undefined'
 *
 * jeselvmo.typeOf(new Error())
 * //=> 'Error'
 *
 */
function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

export default typeOf;
