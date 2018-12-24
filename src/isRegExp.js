import isObject from './isObject';
import objectToString from './objectToString';

function isRegExp(arg) {
  return isObject(arg) && objectToString(arg) === '[object RegExp]';
}

export default isRegExp;
