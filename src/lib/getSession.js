import getStorageItem from './util/getStorageItem';
/**
 *
 * 获取sessionStorage中存储的值。
 * @param  {string} key 键
 * @returns {object} 值
 *
 * @example
 *
 * jeselvmo.getSession();
 * //=> {age: 20, name: 'yangkk', loglevel:webpack-dev-server: 'INFO'}
 *
 * jeselvmo.getSession('name');
 * //=> 'yangkk'
 *
 */
function getSession(key) {
  return getStorageItem(window.sessionStorage, key);
}

export default getSession;
