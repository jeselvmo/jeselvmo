import getStorageItem from './utils/getStorageItem';

/**
 * Get the item value from localStorage.
 *
 * @since 2.1.0
 * @category Web
 * @param  {string} key The key to get.
 * @returns {*} Returns the got value.
 * @example
 *
 * getLocal()
 * // => {age: 20, name: 'yangkk', loglevel:webpack-dev-server: 'INFO'}
 *
 * getLocal('name')
 * // => 'yangkk'
 *
 */
function getLocal(key: string): any {
  return getStorageItem(window.localStorage, key);
}

export default getLocal;
