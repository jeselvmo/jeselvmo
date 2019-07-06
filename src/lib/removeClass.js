/**
 *
 * @desc 为元素移除class
 * @param {HTMLElement} ele
 * @param {String} cls
 */
function removeClass(ele, cls) {
  if (this.hasClass(ele, cls)) {
    // eslint-disable-next-line prefer-template
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

export default removeClass;
