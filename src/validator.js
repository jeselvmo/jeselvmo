/* eslint-disable valid-jsdoc */

function toString(input) {
    if ((typeof input === 'undefined' ? 'undefined' : typeof(input)) === 'object' && input !== null) {
        if (typeof input.toString === 'function') {
            input = input.toString();
        } else {
            input = '[object Object]';
        }
    } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
        input = '';
    }
    return String(input);
}

class Validator {

    toTypeString(obj) {
        return this.toTypeString(obj);
    }

    isString(obj) {
        return typeof obj === 'string';
    }

    isNumber(obj) {
        return typeof obj === 'number';
    }

    isBoolean(obj) {
        return typeof obj === 'boolean';
    }

    isUndefined(obj) {
        return typeof obj === 'undefined';
    }

    isNull(obj) {
        return this.toTypeString(obj) === '[object Null]';
    }

    isFunction(obj) {
        return typeof obj === 'function';
    }

    isArray(obj) {
        return Array.isArray(obj);
    }

    isObject(obj) {
        return this.toTypeString(obj) === '[object Object]';
    }

    isNaN(obj) {
        return isNaN(obj);
    }

    isElement(obj) {
        return this.toTypeString(obj).indexOf('HTML') !== -1;
    }

    isDate(obj) {
        return this.toTypeString(obj) === '[object Date]';
    }

    isJson(obj) {
        return typeof obj == "object" && this.toTypeString(obj) == "[object Object]" && !obj.length
    }

    isFormData(obj) {
        return this.toTypeString(obj) == "[object FormData]"
    }

    isURLSearchParams(obj) {
        return this.toTypeString(obj) == "[object URLSearchParams]";
    }

    isRegExp(obj) {
        return this.toTypeString(obj) === '[object RegExp]';
    }


    /**
     *
     * @desc   判断是否为邮箱地址
     * @param  {String}  str
     * @return {Boolean}
     */
    isEmail(str) {
        return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
    }

    /**
     *
     * @desc   判断`obj`是否为空
     * @param  {Object} obj
     * @return {Boolean}
     */
    isEmptyObject(obj) {
        if (!obj || typeof obj !== 'object' || Array.isArray(obj))
            return false
        return !Object.keys(obj).length
    }

    /**
     *
     * @desc 是否为闰年
     * @param {Number} year
     * @returns {Boolean}
     */
    isLeapYear(year) {
        if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {
            return true
        }
        return false;
    }

    /**
     *
     * @desc   判断是否为手机号
     * @param  {String|Number} str
     * @return {Boolean}
     */
    isPhoneNum(str) {
        return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str)
    }

    /**
     *
     * @desc 判断浏览器是否支持webP格式图片
     * @return {Boolean}
     */
    isSupportWebP() {
        return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    /**
     *
     * @desc   判断是否为URL地址
     * @param  {String} str
     * @return {Boolean}
     */
    isUrl(str) {
        return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
    }

    /**
     *
     * @desc  判断是否为身份证号
     * @param  {String|Number} str
     * @return {Boolean}
     */
    isIdCard(str) {
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
    }


    /**
     * 判断是否为经纬度坐标
     * @param str
     * @returns {boolean}
     */
    isLatLong(str) {
        var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
        var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
        if (!str.includes(',')) return false;
        var pair = str.split(',');
        return lat.test(pair[0]) && long.test(pair[1]);
    }

    isEmpty(str) {
        return str === undefined || str == null || str === '' || str.length === 0;
    }

    isBlank(str) {
        return str === undefined || str == null || str.trim() === '' || str.trim().length === 0;
    }

    isMD5(str) {
        var md5 = /^[a-f0-9]{32}$/;
        return md5.test(str);
    }

    isIn(str, options) {
        var i = void 0;
        if (this.toTypeString(options) === '[object Array]') {
            var array = [];
            for (i in options) {
                if ({}.hasOwnProperty.call(options, i)) {
                    array[i] = toString(options[i]);
                }
            }
            return array.indexOf(str) >= 0;
        } else if ((typeof options === 'undefined' ? 'undefined' : typeof(options)) === 'object') {
            return options.hasOwnProperty(str);
        } else if (options && typeof options.indexOf === 'function') {
            return options.indexOf(str) >= 0;
        }
        return false;
    }

    isInt(str, options) {
        var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
        var intLeadingZeroes = /^[-+]?[0-9]+$/;

        options = options || {};

        // Get the regex to use for testing, based on whether
        // leading zeroes are allowed or not.
        var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

        // Check min/max/lt/gt
        var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
        var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
        var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
        var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

        return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
    }

    isPort(str) {
        return this.isInt(str, {min: 0, max: 65535});
    }

    isLength(str, options) {
        var min = void 0;
        var max = void 0;
        if ((typeof options === 'undefined' ? 'undefined' : typeof(options)) === 'object') {
            min = options.min || 0;
            max = options.max;
        } else {
            // backwards compatibility: isLength(str, min [, max])
            min = arguments[1];
            max = arguments[2];
        }
        var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
        var len = str.length - surrogatePairs.length;
        return len >= min && (typeof max === 'undefined' || len <= max);
    }

    isNumeric(str) {
        var numeric = /^[-+]?[0-9]+$/;
        return numeric.test(str);
    }

    isJsonStr(str) {
        try {
            var obj = JSON.parse(str);
            return !!obj && (typeof obj === 'undefined' ? 'undefined' : typeof(obj)) === 'object';
        } catch (e) {/* ignore */
        }
        return false;
    }

    /**
     * 验证url
     * @param str
     * @returns {boolean}
     */
    isURL(str) {
        var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
            + "?(([0-9a-z_!~*'().&;=+$%-]+: )?[0-9a-z_!~*'().&;=+$%-] aliyunzixun@xxx.com)?" // ftp的 aliyunzixun@xxx.com
            + "(([0-9]{1,3}/.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
            + "|" // 允许IP和DOMAIN(域名)
            + "([0-9a-z_!~*'()-]+/.)*" // 域名- www.
            + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]/." // 二级域名
            + "[a-z]{2,6})" // first level domain- .com or .museum
            + "(:[0-9]{1,4})?" // 端口- :80
            + "((/?)|" // a slash isn't required if there is no file name
            + "(/[0-9a-z_!~*'().;?:@&;=+$,%#-]+)+/?)$";
        var re = new RegExp(strRegex);
        return re.test(str);
    }

}

const validator = new Validator();

export default validator
