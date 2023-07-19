import UAParser, { IOS } from 'ua-parser-js';

/**
 * Gets operating system name and version.
 *
 * @since 2.1.0
 * @category UserAgent
 * @param {string} [userAgent=navigator.userAgent] The browser information to parse.
 * @returns {IOS} returns the running operating system name and version.
 * @example
 *
 * getOS()
 * // => {name: 'Android', version: '5.0'}
 *
 */
function getOS(userAgent?: string): IOS {
  userAgent = userAgent || navigator.userAgent;
  return new UAParser(userAgent).getOS();
}

export default getOS;
