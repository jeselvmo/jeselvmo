function isJson(obj) {
  return (
    typeof obj === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length
  );
}

export default isJson;
