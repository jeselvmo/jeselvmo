import Cookie from './util/Cookie';

/**
 * 设置cookie中存储的值。
 * @param {string} name - 名称
 * @param {Object} value - 值
 * @param {Object} [opts] - 选项
 */
export default function setCookieItem(name, value, opts) {
  Cookie.set(name, value, opts);
}
