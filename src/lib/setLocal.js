import setStorageItem from './util/setStorageItem';
/**
 * 设置localStorage中存储的值
 *
 * @param  {string} key - key
 * @param  {Object} value - value
 * @returns {void}
 *
 * @example
 *
 * jeselvmo.setLocal('school', '第一高中');
 * jeselvmo.getLocal('school');
 * //=> '第一高中'
 *
 * jeselvmo.setLocal('info', {id: 1, 'name':'杨帆'});
 * jeselvmo.getLocal('info');
 * //=> {"id":1,"name":"杨帆"}
 *
 */
function setLocal(key, value) {
  return setStorageItem(window.localStorage, key, value);
}

export default setLocal;
