var toString = {}.toString;

function isArray(arr) {
  return toString.call(arr) == '[object Array]';
}

export default Array.isArray || isArray;
