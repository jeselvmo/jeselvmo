import setStorageItem from './util/setStorageItem';
/**
 *
 * @desc 设置sessionStorage中item值
 * @param  {String} key itemKey
 * @param  {Object} value itemValue
 * @returns {void}
 */
function setSessionItem(key, value) {
  return setStorageItem(window.sessionStorage, key, value);
}

export default setSessionItem;
