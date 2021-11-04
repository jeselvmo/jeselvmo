import assertString from './util/assertString';
/**
 * 判断是否为URL。
 * @param {string} str 校验字符串
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isURL('http://harveyzeng.iteye.com/blog/1776991');
 * //=> true
 *
 * jeselvmo.isURL('https://www.baidu.com');
 * //=> true
 *
 * jeselvmo.isURL('http://baidu.com');
 * //=> true
 *
 */
function isURL(str) {
  assertString(str);
  const pattern =
    '^((https|http|ftp|rtsp|mms)?://)' +
    "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + // ftp的user@
    '(([0-9]{1,3}.){3}[0-9]{1,3}' + // IP形式的URL- 199.194.52.184
    '|' + // 允许IP和DOMAIN（域名）
    "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
    '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' + // 二级域名
    '[a-z]{2,6})' + // first level domain- .com or .museum
    '(:[0-9]{1,4})?' + // 端口- :80
    '((/?)|' + // a slash isn't required if there is no file name
    "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
  let regexp = new RegExp(pattern);
  return regexp.test(str);
}

export default isURL;
