import setStorageItem from './util/setStorageItem';
/**
 * 设置sessionStorage中存储的值。
 *
 * @param  {string} key - key
 * @param  {Object} value - value
 * @returns {void}
 *
 * @example
 *
 * jeselvmo.setSession('school', '第一高中');
 * jeselvmo.getSession('school');
 * //=> '第一高中'
 *
 * jeselvmo.setSession('info', {id: 1, 'name':'杨帆'});
 * jeselvmo.getSession('info');
 * //=> {"id":1,"name":"杨帆"}
 *
 */
function setSession(key, value) {
  return setStorageItem(window.sessionStorage, key, value);
}

export default setSession;
