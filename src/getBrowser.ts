import UAParser, { IBrowser } from 'ua-parser-js';

/**
 * Gets browser name and version.
 *
 * @since 2.1.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The browser information to parse.
 * @returns {IResult} Returns the browser name and version.
 * @example
 *
 * getBrowser()
 * // => {name: 'Chrome', version: '95.0.4638.69', major: '95'}
 */
function getBrowser(userAgent?: string): IBrowser {
  userAgent = userAgent || navigator.userAgent;
  return new UAParser(userAgent).getBrowser();
}

export default getBrowser;
