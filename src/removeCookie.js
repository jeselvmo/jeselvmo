/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name 名称
 * @return {void}
 */
function removeCookie(name) {
    // 设置已过期，系统会立刻删除cookie
    this.setCookie(name, '1', -1);
}

export default removeCookie;
