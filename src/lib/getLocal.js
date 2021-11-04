import getStorageItem from './util/getStorageItem';
/**
 *
 * 获取localStorage中item值
 * @param  {string} key 键
 * @returns {object} 值
 *
 * @example
 *
 * jeselvmo.getLocal();
 * //=> {age: 20, name: 'yangkk', loglevel:webpack-dev-server: 'INFO'}
 *
 * jeselvmo.getLocal('name');
 * //=> 'yangkk'
 *
 */
function getLocal(key) {
  return getStorageItem(window.localStorage, key);
}

export default getLocal;
