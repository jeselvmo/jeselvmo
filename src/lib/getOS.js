import parseUA from './parseUA';

/**
 * 获取操作系统信息。
 * @returns {string} 返回操作系统信息。
 */
function getOS() {
  return parseUA().os;
}

export default getOS;
