/**
 * 是否是移动端
 * @return {boolean}
 */
function isMobile() {
    return !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
}

export default isMobile;
