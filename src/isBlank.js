function isBlank(str) {
    return str === undefined || str == null || str.trim() === '' || str.trim().length === 0;
}

export default isBlank;
