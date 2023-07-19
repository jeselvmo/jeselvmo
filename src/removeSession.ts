/**
 * Remove the value from sessionStorage.
 *
 * @since 2.1.0
 * @category Web
 * @param {string} key The key to remove.
 * @returns {void}
 * @example
 *
 * removeSession('school')
 * getSession('school')
 * // => undefined
 *
 * removeSession('info')
 * getSession('info')
 * // => undefined
 *
 */
function removeSession(key: string): void {
  window.sessionStorage.removeItem(key);
}

export default removeSession;
