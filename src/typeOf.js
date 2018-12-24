/**
 * type-of shortcut
 * @param  {*} val
 * @return {String}
 */
function typeOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString
    .call(val)
    .slice(8, -1)
    .toLowerCase();
}

export default typeOf;
