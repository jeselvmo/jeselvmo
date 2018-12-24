/**
 *
 * @desc 判断两个数组是否相等
 * @param {array} arr1 数组1
 * @param {array} arr2 数组2
 * @return {boolean} 是否相等
 */
import objectEquals from './objectEquals';

function arrayEquals(array1, array2) {
  if (!array1 && !array2) {
    return true;
  }
  if ((!array1 && array2) || (array1 && !array2)) {
    return false;
  }
  if (array1.length != array2.length) {
    return false;
  }
  for (let i = 0, l = array1.length; i < l; i++) {
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      if (!arrayEquals(array1[i], array2[i])) return false;
    } else if (array1[i] instanceof Object && array2[i] instanceof Object) {
      if (!objectEquals(array1[i], array2[i])) return false;
    } else if (array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
}

export default arrayEquals;
