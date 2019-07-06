import getStorageItem from './util/getStorageItem';
/**
 *
 * @desc 获取sessionStorage中item值
 * @param  {String} key itemKey
 * @returns {object}
 */
function getSessionItem(key) {
  return getStorageItem(window.sessionStorage, key);
}

export default getSessionItem;
