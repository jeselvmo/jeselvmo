/**
 * 获取cookie的值。
 * @param {string} name 键
 * @returns {string} 值
 *
 * @example
 *
 * jeselvmo.getCookie('p_h5_u');
 * //=> '63B8752C-0111-4CC9-8D1F-1432170A2B39'
 *
 */
function getCookie(name) {
  let arr = document.cookie.replace(/\s/g, '').split(';');
  let cookies = {};
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i].split('=');
    cookies[decodeURIComponent(tempArr[0])] = decodeURIComponent(tempArr[1]);
  }
  if (name) {
    return cookies[name];
  }
  return cookies;
}

export default getCookie;
