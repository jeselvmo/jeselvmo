import UAParser, { IResult } from 'ua-parser-js';

/**
 * Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
 * Result: { ua: '', browser: {}, cpu: {}, device: {}, engine: {}, os: {} }
 *
 * @since 3.0.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The browser information to parse.
 * @returns {IResult} Returns all function object calls, user-agent string, browser info, cpu, device, engine, os.
 * @example
 *
 * parseUA()
 * // => {
 *   browser: {name: 'Chrome', version: '95.0.4638.69', major: '95'},
 *   cpu: {architecture: undefined},
 *   device: {vendor: 'Samsung', model: 'SM-G900P', type: 'mobile'},
 *   engine: {name: 'Blink', version: '95.0.4638.69'},
 *   os: {name: 'Android', version: '5.0'},
 *   ua: "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Mobile Safari/537.36"
 * }
 */
function parseUA(userAgent?: string): IResult {
  userAgent = userAgent || navigator.userAgent;
  return new UAParser(userAgent).getResult();
}

export default parseUA;
