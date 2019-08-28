/**
 * 浅拷贝源对象的属性到目标对象中。
 * @param {Object} source 源对象。
 * @param {Object} target 目标对象。
 * @returns {void}
 */
function shallowCopy(source, target) {
  for (let i in source) {
    // 判断不是原型的属性
    if (source.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }
}

export default shallowCopy;
