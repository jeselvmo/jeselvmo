import parseQueryString from "./parseQueryString";

/**
 *@param {string} url 完整的URL地址
 *@returns {object} 自定义的对象
 */
function parseUrl(url) {
    let ele = null;
    if (url) {
        ele = document.createElement('a');
        ele.href = url;
    } else {
        ele = window.location;
    }
    let baseurl = ele.origin + ele.pathname;
    let params = parseQueryString(ele.href);
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

export default parseUrl;
