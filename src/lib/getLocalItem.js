import getStorageItem from './util/getStorageItem';
/**
 *
 * 获取localStorage中item值
 * @param  {string} key 键。
 * @returns {object} 值。
 */
function getLocalItem(key) {
  return getStorageItem(window.localStorage, key);
}

export default getLocalItem;
