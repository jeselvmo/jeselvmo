function isJsonStr(str) {
    try {
        var obj = JSON.parse(str);
        return !!obj && (typeof obj === 'undefined' ? 'undefined' : typeof(obj)) === 'object';
    } catch (e) {/* ignore */
    }
    return false;
}

export default isJsonStr;
