import parseUA from './parseUA';

/**
 * 获取浏览器内核。
 * @returns {string} 返回浏览器内核信息。
 */
function getEngine() {
  return parseUA().engine;
}

export default getEngine;
