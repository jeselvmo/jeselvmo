/**
 * 移除localStorage中的值。
 * @param {string} key - 要移除的项的key。
 * @returns {void}
 */
export default function removeLocalItem(key) {
  window.localStorage.removeItem(key);
}
