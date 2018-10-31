/**
 * 删除所有HTML标签
 * @param tab
 * @return {*}
 */
function removeHtmlTag(tab) {
    return tab.replace(/<[^<>]+?>/g, '');
}

export default removeHtmlTag;
