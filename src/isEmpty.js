import isArray from './isArray';
import isObject from './isObject';

function isEmpty(arg) {
  return (
    arg === undefined ||
    arg == null ||
    arg === '' ||
    (isArray(arg) && arg.length === 0) ||
    (isObject(arg) && Object.keys(arg).length === 0)
  );
}

export default isEmpty;
