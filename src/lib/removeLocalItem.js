/**
 * 移除localStorage中的值。
 * @param {string} key - 要移除的项的key。
 * @returns {void}
 */
function removeLocalItem(key) {
  window.localStorage.removeItem(key);
}

export default removeLocalItem;
