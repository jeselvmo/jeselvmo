function isNumericStr(str) {
    var numeric = /^[-+]?[0-9]+$/;
    return numeric.test(str);
}

export default isNumericStr;
