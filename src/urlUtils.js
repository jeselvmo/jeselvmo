/* eslint-disable valid-jsdoc */
class UrlUtils {

    /**
     *
     * @desc   对象序列化
     * @param  {Object} obj
     * @return {String}
     */
    toQueryString(obj) {
        if (!obj) return '';
        var pairs = [];

        for (var key in obj) {
            var value = obj[key];

            if (value instanceof Array) {
                for (var i = 0; i < value.length; ++i) {
                    pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
                }
                continue;
            }

            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }

        return pairs.join('&');
    }

    /**
     *
     * @desc   url参数转对象
     * @param  {String} url  default: window.location.href
     * @return {Object}
     */
    parseQueryString(url) {
        let ele = null;
        if (url) {
            ele = document.createElement('a');
            ele.href = url;
        } else {
            ele = window.location;
        }

        var search = ele.search.replace('?', '');
        if (search === '') return {};
        search = search.split('&');
        var query = {};
        for (var i = 0; i < search.length; i++) {
            var pair = search[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    }

    toUrl(urlObj) {
        let url = '';

        if (urlObj.baseurl) {
            url += urlObj.baseurl;
        } else if (urlObj.origin && urlObj.pathname) {
            url += urlObj.origin + urlObj.pathname
        }

        if (urlObj.params && Object.keys(urlObj.params).length > 0) {
            url += '?' + this.toQueryString(urlObj.params);
        } else if (urlObj.query) {
            url += '?' + urlObj.query;
        } else if (urlObj.search) {
            url += urlObj.search;
        }

        if (urlObj.hash) {
            url += '#' + urlObj.hash;
        }

        return url;
    }

    /**
     *@param {string} url 完整的URL地址
     *@returns {object} 自定义的对象
     */
    parseUrl(url) {
        let ele = null;
        if (url) {
            ele = document.createElement('a');
            ele.href = url;
        } else {
            ele = window.location;
        }
        let baseurl = ele.origin + ele.pathname;
        let params = this.parseQueryString(ele.href);
        return {
            href: ele.href,
            protocol: ele.protocol.replace(':', ''),
            host: ele.host,
            hostname: ele.hostname,
            port: ele.port,
            origin: ele.origin,
            pathname: ele.pathname,
            search: ele.search,
            hash: ele.hash.replace('#', ''),
            query: ele.search.replace('?', ''),
            params,
            baseurl,
            file: (ele.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            relative: (ele.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: ele.pathname.replace(/^\//, '').split('/')
        };
    }

    getQueryString() {
        if (arguments.length === 0) {
            return this.parseQueryString();
        } else if (arguments.length === 1) {
            return this.parseQueryString()[arguments[0]];
        } else if (arguments.length === 2) {
            return this.parseQueryString(arguments[0])[arguments[1]];
        }
        return null
    }

}

const urlUtils = new UrlUtils();

export default urlUtils;
