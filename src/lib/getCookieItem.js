import Cookie from './util/Cookie';

/**
 * 获取cookie的值。
 * @param {string} name 键。
 * @returns {string} 值。
 */
function getCookieItem(name) {
  return Cookie.get(name);
}

export default getCookieItem;
