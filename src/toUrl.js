import toQueryString from "./toQueryString";

function toUrl(urlObj) {
    let url = '';

    if (urlObj.baseurl) {
        url += urlObj.baseurl;
    } else if (urlObj.origin && urlObj.pathname) {
        url += urlObj.origin + urlObj.pathname
    }

    if (urlObj.params && Object.keys(urlObj.params).length > 0) {
        url += '?' + toQueryString(urlObj.params);
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

export default toUrl;
