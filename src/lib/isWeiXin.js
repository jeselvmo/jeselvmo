/**
 * 判断是否是微信中运行。
 */
export default function isWeiXin() {
  let ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('micromessenger') !== -1;
}
