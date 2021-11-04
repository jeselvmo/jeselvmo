import parseUA from './parseUA';

/**
 * 获取操作系统信息。
 * @returns {string} 返回操作系统信息
 *
 * @example
 *
 * jeselvmo.getOS();
 * //=> {name: 'Android', version: '5.0'}
 *
 */
function getOS() {
  return parseUA().os;
}

export default getOS;
