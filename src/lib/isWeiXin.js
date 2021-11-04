/**
 * 判断是否是微信中运行。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isWeiXin();
 * //=> true
 *
 * jeselvmo.isWeiXin();
 * //=> false
 *
 */
function isWeiXin() {
  let ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('micromessenger') !== -1;
}

export default isWeiXin;
