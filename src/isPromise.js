/**
 * 判断是Promise对象
 * @param {*} obj 对象
 * @return {Boolean} 结果
 */
function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

export default isPromise;
