import hasClass from './hasClass';
/**
 *
 * @desc   为元素添加class
 * @param  {HTMLElement} ele element
 * @param  {String} cls className
 * @returns {void}
 */
function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += ` ${cls}`;
  }
}

export default addClass;
