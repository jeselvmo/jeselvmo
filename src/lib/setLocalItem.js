import setStorageItem from './util/setStorageItem';
/**
 *
 * @desc 设置localStorage中item值
 * @param  {String} key itemKey
 * @param  {Object} value itemValue
 * @returns {void}
 */
function setLocalItem(key, value) {
  return setStorageItem(window.localStorage, key, value);
}

export default setLocalItem;
