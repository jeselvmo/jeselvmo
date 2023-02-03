/**
 * 获取cookie的值。
 * @param {string} name 键
 * @returns {string | object} 值
 *
 * @example
 *
 * getCookie('p_h5_u')
 * // => '63B8752C-0111-4CC9-8D1F-1432170A2B39'
 *
 */
function getCookie(name: string): string | object {
  const arr = document.cookie.replace(/\s/g, '').split(';');
  const cookies = {};
  for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i].split('=');
    cookies[decodeURIComponent(tempArr[0])] = decodeURIComponent(tempArr[1]);
  }
  if (name) {
    return cookies[name];
  }
  return cookies;
}

export default getCookie;
