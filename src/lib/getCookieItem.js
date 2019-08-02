import Cookie from './util/Cookie';

/**
 * 获取cookie的值。
 * @param {string} name
 * @returns {string}
 */
export default function getCookieItem(name) {
  return Cookie.get(name);
}
