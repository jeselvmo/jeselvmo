/**
 * 移除sessionStorage中的值。
 * @param {string} key - 要移除的项的key。
 * @returns {void}
 *
 * @example
 *
 * jeselvmo.removeSession('school');
 * jeselvmo.getSession('school');
 * //=> undefined
 *
 * jeselvmo.removeSession('info');
 * jeselvmo.getSession('info');
 * //=> undefined
 *
 */
function removeSession(key) {
  window.sessionStorage.removeItem(key);
}

export default removeSession;
