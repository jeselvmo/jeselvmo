import Cookie from './util/Cookie';

/**
 * 移除cookie中的值。
 * @param {string} name - 名称
 * @param {Object} [opts] - 选项
 * @returns {void}
 */
function removeCookieItem(name, opts) {
  Cookie.remove(name, opts);
}

export default removeCookieItem;
