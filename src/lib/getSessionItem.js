import getStorageItem from './util/getStorageItem';
/**
 *
 * 获取sessionStorage中存储的值。
 * @param  {string} key 键。
 * @returns {object} 值。
 */
function getSessionItem(key) {
  return getStorageItem(window.sessionStorage, key);
}

export default getSessionItem;
