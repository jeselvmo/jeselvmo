import parseUA from './parseUA';

/**
 * 获取设备信息。
 * @returns {string} 返回设备信息。
 */
function getDevice() {
  return parseUA().device;
}

export default getDevice;
