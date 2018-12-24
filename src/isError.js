import isObject from './isObject';
import objectToString from './objectToString';

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

export default isError;
