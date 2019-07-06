import getStorageItem from './util/getStorageItem';
/**
 *
 * @desc 获取localStorage中item值
 * @param  {String} key itemKey
 * @returns {object}
 */
function getLocalItem(key) {
  return getStorageItem(window.localStorage, key);
}

export default getLocalItem;
