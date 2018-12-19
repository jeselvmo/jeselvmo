import typeOf from './typeOf';

function isNumber(num) {
  var type = typeOf(num);

  if (type === 'string') {
    if (!num.trim()) return false;
  } else if (type !== 'number') {
    return false;
  }

  return num - num + 1 >= 0;
}

export default isNumber;
