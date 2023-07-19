import UAParser, { IEngine } from 'ua-parser-js';

/**
 * Gets browser engine name and version.
 *
 * @since 2.1.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The browser information to parse.
 * @returns {IOS} Returns the browser engine name and version.
 * @example
 *
 * getEngine()
 * // => {name: 'Blink', version: '95.0.4638.69'}
 *
 */
function getEngine(userAgent?: string): IEngine {
  userAgent = userAgent || navigator.userAgent;
  return new UAParser(userAgent).getEngine();
}

export default getEngine;
