/**
 *
 * @desc 设置Cookie
 * @param {String} name 名称
 * @param {String} value 值
 * @param {Number} days 有效期
 * @return {void}
 */
function setCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date;
}

export default setCookie;
