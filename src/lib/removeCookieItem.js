import Cookie from './util/Cookie';

/**
 * 移除cookie中的值。
 * @param {string} key - 要移除的项的key。
 * @returns {void}
 */
export default function removeCookieItem(name, opts) {
  Cookie.remove(name, opts);
}
