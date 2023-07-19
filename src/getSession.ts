import getStorageItem from './utils/getStorageItem';
/**
 * Get the item value from sessionStorage.
 *
 * @since 2.1.0
 * @category Web
 * @param  {string} key The key to get.
 * @returns {*} Returns the got value.
 * @example
 *
 * getSession(
 * // => {age: 20, name: 'yangkk', loglevel:webpack-dev-server: 'INFO'}
 *
 * getSession('name')
 * // => 'yangkk'
 *
 */
function getSession(key: string): any {
  return getStorageItem(window.sessionStorage, key);
}

export default getSession;
