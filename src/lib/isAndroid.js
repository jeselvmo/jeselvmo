function isAndroid() {
  let ua = navigator.userAgent;
  return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
}

export default isAndroid;
