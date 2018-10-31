function arrayToHash(array) {
    var hash = {};

    array.forEach(function (val, idx) {
        hash[val] = true;
    });

    return hash;
}

export default arrayToHash;
