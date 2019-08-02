/**
 * 检查是不是Android环境。
 * @return {boolean} 真/假
 */
export default function isAndroid() {
  let ua = navigator.userAgent;
  return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
}
