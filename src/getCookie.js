/**
 *
 * @desc 根据name读取cookie
 * @param {String} name 名称
 * @return {String} 值
 */
function getCookie(name) {
  var arr = document.cookie.replace(/\s/g, '').split(';');
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i].split('=');
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}

export default getCookie;
