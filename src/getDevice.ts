import UAParser, { IDevice } from 'ua-parser-js';

/**
 * Gets device model, type, vendor.
 *
 * @since 3.0.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The browser information to parse.
 * @returns {IDevice} Returns the device model, type, vendor.
 * @example
 *
 * getDevice()
 * // => {vendor: 'Samsung', model: 'SM-G900P', type: 'mobile'}
 *
 */
function getDevice(userAgent?: string): IDevice {
  userAgent = userAgent || navigator.userAgent;
  return new UAParser(userAgent).getDevice();
}

export default getDevice;
