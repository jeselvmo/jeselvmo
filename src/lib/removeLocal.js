/**
 * 移除localStorage中的值。
 * @param {string} key - 要移除的项的key。
 * @returns {void}
 *
 * @example
 *
 * jeselvmo.removeLocal('school');
 * jeselvmo.getLocal('school');
 * //=> undefined
 *
 * jeselvmo.removeLocal('info');
 * jeselvmo.getLocal('info');
 * //=> undefined
 *
 */
function removeLocal(key) {
  window.localStorage.removeItem(key);
}

export default removeLocal;
