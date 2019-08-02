import getStorageItem from './util/getStorageItem';
/**
 *
 * 获取sessionStorage中存储的值。
 * @param  {string} key - key
 * @returns {object}
 */
export default function getSessionItem(key) {
  return getStorageItem(window.sessionStorage, key);
}
