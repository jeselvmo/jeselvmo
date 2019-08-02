import setStorageItem from './util/setStorageItem';
/**
 * 设置sessionStorage中存储的值。
 *
 * @param  {string} key - key
 * @param  {Object} value - value
 * @returns {void}
 */
export default function setSessionItem(key, value) {
  return setStorageItem(window.sessionStorage, key, value);
}
