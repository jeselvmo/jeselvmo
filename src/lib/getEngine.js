import parseUA from './parseUA';

/**
 * 获取浏览器内核。
 * @returns {string} 返回浏览器内核信息
 *
 * @example
 *
 * jeselvmo.getEngine();
 * //=> {name: 'Blink', version: '95.0.4638.69'}
 *
 */
function getEngine() {
  return parseUA().engine;
}

export default getEngine;
