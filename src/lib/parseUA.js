import UAParser from 'ua-parser-js';

/**
 * 解析UA。
 * @param {string} [ua] userAgent
 * @returns {object} 结果
 */
function parseUA(ua) {
  ua = ua || navigator.userAgent;
  return new UAParser(ua).getResult();
}

export default parseUA;
