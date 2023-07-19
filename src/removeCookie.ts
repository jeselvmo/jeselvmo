import setCookie from './setCookie';

/**
 * Remove the value from cookies.
 *
 * @since 2.1.0
 * @category Web
 * @param {string} key The key to remove.
 * @returns {void}
 * @example
 *
 * removeCookie('name')
 * // => undefined
 *
 */
function removeCookie(name: string): void {
  setCookie(name, '', { maxAge: 0 });
}

export default removeCookie;
