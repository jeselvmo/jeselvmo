/**
 *
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} ele element
 * @param {String} cls className
 * @return {Boolean}
 */
function hasClass(ele, cls) {
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}

export default hasClass;
