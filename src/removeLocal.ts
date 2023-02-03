/**
 * Remove the value from localStorage.
 *
 * @since 3.0.0
 * @category Web
 * @param {string} key The key to remove.
 * @returns {void}
 * @example
 *
 * removeLocal('school')
 * getLocal('school')
 * // => undefined
 *
 * removeLocal('info')
 * getLocal('info');
 * // => undefined
 *
 */
function removeLocal(key: string): void {
  window.localStorage.removeItem(key);
}

export default removeLocal;
