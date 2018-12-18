function isMD5(str) {
  var md5 = /^[a-f0-9]{32}$/;
  return md5.test(str);
}

export default isMD5;
