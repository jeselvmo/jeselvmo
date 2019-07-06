import isPrimitive from './isPrimitive';

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
