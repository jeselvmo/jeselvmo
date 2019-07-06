/* eslint-disable operator-linebreak */
function isPrimitive(obj) {
  return (
    typeof obj === 'boolean' ||
    typeof obj === 'number' ||
    typeof obj === 'string' ||
    typeof obj === 'symbol' ||
    obj === null ||
    obj === undefined
  );
}

export default isPrimitive;
