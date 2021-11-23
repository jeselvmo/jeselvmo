/**
 * 生成GUID全局唯一标识符。
 * @returns {string} 返回GUID字符串。
 *
 * @example
 *
 * jeselvmo.guid();
 * //=> '9428c1ef-719c-836e-f3a1-2ea52e1df6b3'
 *
 */
function guid() {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

export default guid;
