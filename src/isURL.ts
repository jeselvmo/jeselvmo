/**
 * Checks if `value` is a URL string.
 *
 * @since 2.1.0
 * @category Validate
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a URL string, else `false`.
 * @example
 *
 * isURL('http://harveyzeng.iteye.com/blog/1776991')
 * // => true
 *
 * isURL('https://www.baidu.com')
 * // => true
 *
 * isURL('http://baidu.com')
 * // => true
 *
 */
function isURL(value: string): boolean {
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
  const regexp = new RegExp(pattern);
  return regexp.test(value);
}

export default isURL;
