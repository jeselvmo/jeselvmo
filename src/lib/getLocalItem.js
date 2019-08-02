import getStorageItem from './util/getStorageItem';
/**
 *
 * 获取localStorage中item值
 * @param  {string} key - key
 * @returns {object}
 */
export default function getLocalItem(key) {
  return getStorageItem(window.localStorage, key);
}
