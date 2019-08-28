/**
 * 检查是不是Android环境。
 * @returns {boolean} 真/假。
 */
function isAndroid() {
  let ua = navigator.userAgent;
  return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
}

export default isAndroid;
