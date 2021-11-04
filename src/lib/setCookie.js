/**
 * 设置cookie中存储的值。
 * @param {string} name - 名称
 * @param {Object} value - 值
 * @param {Object} [opts] - 选项
 * @returns {void}
 *
 * @example
 *
 * jeselvmo.setCookieItem('name', 'yangkk');
 * //=> undefined
 *
 * jeselvmo.setCookieItem('name', 'yangkk', { maxAge:0 })
 * //=> undefined
 *
 */
function setCookie(name, value, opts) {
  let { maxAge, expires, path, domain, secure, samesite } = opts || {};
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (path) cookie += `; path=${path}`;
  if (domain) cookie += `; domain=${domain}`;

  // `max-age` is not compatible with any version of Internet Explorer,
  // Edge and some mobile browsers.
  // so we convert `max-age` to `expires`
  if (maxAge != null) {
    // eslint-disable-next-line no-nested-ternary
    expires = maxAge <= 0 ? 0 : maxAge === Infinity ? maxAge : Date.now() + maxAge * 1000;
  }

  if (expires != null) {
    if (!(expires instanceof Date)) {
      expires = new Date(expires === Infinity ? 'Fri, 31 Dec 9999 23:59:59 GMT' : expires);
    }

    cookie += `; expires=${expires.toUTCString()}`;
  }

  if (secure) cookie += '; secure';
  if (samesite) cookie += `; samesite=${samesite}`;
  document.cookie = cookie;
}

export default setCookie;
