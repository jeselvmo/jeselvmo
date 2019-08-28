/**
 * 深拷贝，支持常见类型
 * @param {Any} values 要复制的对象。
 * @returns {Any} 新对象。
 */
function deepClone(values) {
  let copy;

  // Handle the 3 simple types, and null or undefined
  if (values == null || typeof values !== 'object') return values;

  // Handle Date
  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }

  // Handle Array
  if (values instanceof Array) {
    copy = [];
    for (let i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }
    return copy;
  }

  // Handle Object
  if (values instanceof Object) {
    copy = {};
    for (let attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy values! Its type isn't supported.");
}

export default deepClone;
