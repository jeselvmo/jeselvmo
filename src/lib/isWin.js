/**
 * 判断是否是Window环境中运行。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isWin();
 * //=> true
 *
 * jeselvmo.isWin();
 * //=> false
 *
 */
function isWin() {
  return /(Win)/i.test(navigator.userAgent) || /(Win)/i.test(navigator.platform);
}

export default isWin;
