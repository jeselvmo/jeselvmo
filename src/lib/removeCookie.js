import setCookie from './setCookie';

/**
 * 移除cookie中的值。
 * @param {string} name 键名
 * @returns {void}
 *
 * @example
 *
 * jeselvmo.removeCookie('name');
 * //=> undefined
 *
 */
function removeCookie(name) {
  setCookie(name, '', { maxAge: 0 });
}

export default removeCookie;
