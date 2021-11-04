import isPrimitive from './isPrimitive';

/**
 * 深度比较两个对象是否相等。
 * @param {Object} o1 第一个对象
 * @param {Object} o2 第二个对象
 * @returns {boolean} 是否成功
 *
 * @example
 *
 * jeselvmo.deepEquals({}, {})
 * //=> true
 *
 * jeselvmo.deepEquals({name:'yangkk'}, {name:'yangkk'})
 * //=> true
 *
 */
function deepEquals(o1, o2) {
  if (!o1 || !o2 || isPrimitive(o1)) {
    return o1 === o2;
  }

  if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false;
  }

  let keys = Object.keys(o1);
  let len = keys.length;

  for (let i = 0; i < len; i++) {
    let key = keys[i];

    if (!deepEquals(o1[key], o2[key])) {
      return false;
    }
  }
  return true;
}

export default deepEquals;
