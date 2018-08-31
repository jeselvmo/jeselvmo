/* eslint-disable valid-jsdoc */
class WebUtils {

    /**
     *
     * @desc 判断元素是否有某个class
     * @param {HTMLElement} ele element
     * @param {String} cls className
     * @return {Boolean}
     */
    hasClass(ele, cls) {
        return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
    }

    /**
     *
     * @desc   为元素添加class
     * @param  {HTMLElement} ele element
     * @param  {String} cls className
     * @returns {void}
     */
    addClass(ele, cls) {
        if (!this.hasClass(ele, cls)) {
            ele.className += ' ' + cls;
        }
    }

    /**
     *
     * @desc 为元素移除class
     * @param {HTMLElement} ele
     * @param {String} cls
     */
    removeClass(ele, cls) {
        if (this.hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    }

    /**
     * @desc 获取window窗口大小
     * @returns {{width: number, height: number}}
     */
    getWindowSize() {
        let width = 0, height = 0;
        // 获取窗口宽度
        if (window.innerWidth)
            width = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            width = document.body.clientWidth;
        // 获取窗口高度
        if (window.innerHeight)
            height = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            height = document.body.clientHeight;
        // 通过深入 Document 内部对 body 进行检测，获取窗口大小
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            height = document.documentElement.clientHeight;
            width = document.documentElement.clientWidth;
        }
        return {width, height}
    }

    /**
     *
     * @desc H5软键盘缩回、弹起回调
     * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
     * @param {Function} downCb 当软键盘弹起后，缩回的回调
     * @param {Function} upCb 当软键盘弹起的回调
     */

    windowResize(downCb, upCb) {
        let clientHeight = window.innerHeight;
        downCb = typeof downCb === 'function' ? downCb : function () {
        };
        upCb = typeof upCb === 'function' ? upCb : function () {
        };
        window.addEventListener('resize', () => {
            let height = window.innerHeight;
            if (height === clientHeight) {
                downCb();
            }
            if (height < clientHeight) {
                upCb();
            }
        });
    }

    /**
     *
     * @desc 获取滚动条距顶部的距离
     */
    getScrollTop() {
        return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    }

    /**
     *
     * @desc 设置滚动条距顶部的距离
     */
    setScrollTop(value) {
        window.scrollTo(0, value);
        return value;
    }

    /**
     *
     * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
     * @param {Number} to
     * @param {Number} duration
     */
    scrollTo(to, duration) {
        if (duration < 0) {
            this.setScrollTop(to);
            return
        }
        var diff = to - this.getScrollTop();
        if (diff === 0) return;
        var step = diff / duration * 10;
        requestAnimationFrame(() => {
            if (Math.abs(step) > Math.abs(diff)) {
                this.setScrollTop(this.getScrollTop() + diff);
                return;
            }
            this.setScrollTop(this.getScrollTop() + step);
            if (diff > 0 && this.getScrollTop() >= to || diff < 0 && this.getScrollTop() <= to) {
                return;
            }
            this.scrollTo(to, duration - 16);
        });
    }

    /**
     *
     * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
     * @param {HTMLElement} ele
     * @returns { {left: number, top: number} }
     */
    offset(ele) {
        var pos = {
            left: 0,
            top: 0
        };
        while (ele) {
            pos.left += ele.offsetLeft;
            pos.top += ele.offsetTop;
            ele = ele.offsetParent;
        }
        return pos;
    }

    /**
     *
     * @desc 随机生成颜色
     * @return {String}
     */
    randomColor() {
        return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
    }

    /**
     *
     * @desc 获取浏览器类型和版本
     * @return {String}
     */
    getExplore() {
        var sys = {}, ua = navigator.userAgent.toLowerCase(), s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
            (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
                (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
                    (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
                        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
                            (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
                                (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
        // 根据关系进行判断
        if (sys.ie) return ('IE: ' + sys.ie)
        if (sys.edge) return ('EDGE: ' + sys.edge)
        if (sys.firefox) return ('Firefox: ' + sys.firefox)
        if (sys.chrome) return ('Chrome: ' + sys.chrome)
        if (sys.opera) return ('Opera: ' + sys.opera)
        if (sys.safari) return ('Safari: ' + sys.safari)
        return 'Unkonwn'
    }

    /**
     *
     * @desc 获取操作系统类型
     * @return {String}
     */
    getOS() {
        var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
        var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
        var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

        if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios'
        if (/android/i.test(userAgent)) return 'android'
        if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
        if (/mac/i.test(appVersion)) return 'MacOSX'
        if (/win/i.test(appVersion)) return 'windows'
        if (/linux/i.test(appVersion)) return 'linux'
    }
}

const webUtils = new WebUtils();
export default webUtils;
