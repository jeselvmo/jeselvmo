import setStorageItem from './util/setStorageItem';
/**
 * 设置localStorage中存储的值
 *
 * @param  {string} key - key
 * @param  {Object} value - value
 * @returns {void}
 */
export default function setLocalItem(key, value) {
  return setStorageItem(window.localStorage, key, value);
}
