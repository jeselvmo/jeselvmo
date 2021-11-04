import UAParser from 'ua-parser-js';

/**
 * 解析userAgent。
 * @param {string} [ua] userAgent
 * @returns {object} 结果
 *
 * @example
 *
 * jeselvmo.parseUA();
 * //=> {
 *         browser: {name: 'Chrome', version: '95.0.4638.69', major: '95'},
 *         cpu: {architecture: undefined},
 *         device: {vendor: 'Samsung', model: 'SM-G900P', type: 'mobile'},
 *         engine: {name: 'Blink', version: '95.0.4638.69'},
 *         os: {name: 'Android', version: '5.0'},
 *         ua: "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Mobile Safari/537.36"
 *      }
 */
function parseUA(ua) {
  ua = ua || navigator.userAgent;
  return new UAParser(ua).getResult();
}

export default parseUA;
