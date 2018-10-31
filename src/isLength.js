function isLength(str, options) {
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

export default isLength;
