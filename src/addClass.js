/**
 *
 * @desc   为元素添加class
 * @param  {HTMLElement} ele element
 * @param  {String} cls className
 * @returns {void}
 */
function addClass(ele, cls) {
  if (!this.hasClass(ele, cls)) {
    ele.className += ' ' + cls;
  }
}

export default addClass;
