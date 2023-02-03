/* eslint-disable prefer-const */
type SetCookieOptions = {
  maxAge?: number;
  expires?: Date | number;
  path?: number;
  domain?: number;
  secure?: number;
  samesite?: number;
};

/**
 * Set item value from cookies.
 *
 * @since 3.0.0
 * @category Web
 * @param {string} name The name to set.
 * @param {Object} value The value to set.
 * @param {Object} [options] The options to set.
 * @returns {void}
 *
 * @example
 *
 * setCookieItem('name', 'yangkk')
 * // => undefined
 *
 * setCookieItem('name', 'yangkk', { maxAge:0 })
 * // => undefined
 *
 */
function setCookie(name: string, value: any, options: SetCookieOptions): void {
  let { maxAge, expires, path, domain, secure, samesite } = options || {};
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
