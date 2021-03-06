/**
 * 移除sessionStorage中的值。
 * @param {string} key - 要移除的项的key。
 * @returns {void}
 */
function removeSessionItem(key) {
  window.sessionStorage.removeItem(key);
}

export default removeSessionItem;
