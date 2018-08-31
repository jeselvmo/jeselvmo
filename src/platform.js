/* eslint-disable valid-jsdoc */

class Platform {

    /**
     * 取得浏览器的userAgent字符串
     * @returns {string}
     */
    userAgent = navigator.userAgent;

    platform = navigator.platform;

    get name() {
        if (this.isAndroid()) {
            return 'android'
        } else if (this.isIOS()) {
            return "ios";
        } else if (this.isLinux()) {
            return "linux";
        } else if (this.isWin()) {
            return "windows";
        } else if (this.isMac()) {
            return "mac";
        }
        return "unknown";
    }


    get browser() {
        if (this.isIE()) {
            let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(this.userAgent);
            let fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion === 7) {
                return "IE7";
            }
            else if (fIEVersion === 8) {
                return "IE8";
            }
            else if (fIEVersion === 9) {
                return "IE9";
            }
            else if (fIEVersion === 10) {
                return "IE10";
            }
            else if (fIEVersion === 11) {
                return "IE11";
            }
            //IE版本过低
            return "0"
        }

        if (this.isFirefox()) {
            return "Firefox";
        }
        if (this.isOpera()) {
            return "Opera";
        }
        if (this.isSafari()) {
            return "Safari";
        }
        if (this.isChrome()) {
            return "Chrome";
        }
        if (this.isEdge()) {
            return "Edge";
        }
        //未知浏览器
        return null
    }

    /**
     * 判断是否Opera浏览器
     */
    isOpera() {
        return this.userAgent.indexOf("Opera") > -1;
    }

    isIE() {
        return this.userAgent.indexOf("compatible") > -1 && this.userAgent.indexOf("MSIE") > -1 && !this.isOpera(); //判断是否IE浏览器
    }

    isEdge() {//判断是否IE的Edge浏览器
        return this.userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !this.isIE();
    }

    isFirefox() {//判断是否Firefox浏览器
        return this.userAgent.indexOf("Firefox") > -1;
    }

    isSafari() {//判断是否Safari浏览器
        return this.userAgent.indexOf("Safari") > -1 && this.userAgent.indexOf("Chrome") === -1;
    }

    isChrome() {//判断Chrome浏览器
        return this.userAgent.indexOf("Chrome") > -1 && this.userAgent.indexOf("Safari") > -1;
    }

    isAndroid() {
        return this.userAgent.indexOf('Android') > -1 || this.userAgent.indexOf('Adr') > -1;
    }

    isIOS() {
        return !!this.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }

    isIPhone() {
        return this.userAgent.indexOf('iPhone') > -1;
    }

    isIPad() {
        return this.userAgent.indexOf('iPad') > -1;
    }

    isIPod() {
        return this.userAgent.indexOf('iPod') > -1;
    }

    isWindowsPhone() {
        return this.userAgent.indexOf('Windows Phone') > -1;
    }

    isSymbianOS() {
        return this.userAgent.indexOf('SymbianOS') > -1;
    }

    isWeiXin() {//是否在微信中打开
        return this.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
    }

    isQQ() {//是否QQ
        return this.userAgent.match(/\sQQ/i) === " qq";
    }

    IsPC() {
        return !(this.isAndroid() || this.isIPhone() || this.isIPad() || this.isIPod() || this.isSymbianOS() || this.isWindowsPhone());
    }

    isTrident() {//IE内核
        return this.userAgent.indexOf('Trident') > -1;
    }

    isPresto() {//opera内核
        return this.userAgent.indexOf('Presto') > -1;
    }

    isWebKit() {//苹果、谷歌内核
        return this.userAgent.indexOf('AppleWebKit') > -1;
    }

    isGecko() {//火狐内核
        return this.userAgent.indexOf('Gecko') > -1 && this.userAgent.indexOf('KHTML') === -1;
    }

    isMobile() {// 是否为移动终端
        return !!this.userAgent.match(/AppleWebKit.*Mobile.*/);
    }

    isWebApp() {// 是否web应该程序，没有头部与底部
        return this.userAgent.indexOf('Safari') === -1;
    }


    isWin() {
        return (this.platform === "Win32") || (this.platform === "Windows");
    }

    isMac() {
        return (this.platform === "Mac68K") || (this.platform === "MacPPC") || (this.platform === "Macintosh") || (this.platform === "MacIntel");
    }

    isLinux() {
        return this.platform.indexOf("Linux") > -1;
    }

}

const platform = new Platform();

export default platform
