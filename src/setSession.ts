import setStorageItem from './utils/setStorageItem';
/**
 * Set item value from sessionStorage.
 *
 * @since 2.1.0
 * @category Web
 * @param  {string} key The key to set.
 * @param  {Object} value The value to set.
 * @returns {void}
 * @example
 *
 * setSession('school', '第一高中')
 * getSession('school')
 * // => '第一高中'
 *
 * setSession('info', {id: 1, 'name':'杨帆'})
 * getSession('info')
 * // => {"id":1,"name":"杨帆"}
 *
 */
function setSession(key: string, value: any) {
  return setStorageItem(window.sessionStorage, key, value);
}

export default setSession;
