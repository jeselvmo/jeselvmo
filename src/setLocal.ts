import setStorageItem from './utils/setStorageItem';
/**
 * Set value from localStorage.
 *
 * @since 3.0.0
 * @category Web
 * @param  {string} key The key to set.
 * @param  {Object} value The value to set.
 * @returns {void}
 * @example
 *
 * setLocal('school', '第一高中')
 * getLocal('school');
 * // => '第一高中'
 *
 * setLocal('info', {id: 1, 'name':'杨帆'})
 * getLocal('info');
 * // => {"id":1,"name":"杨帆"}
 *
 */
function setLocal(key: string, value: any): void {
  setStorageItem(window.localStorage, key, value);
}

export default setLocal;
