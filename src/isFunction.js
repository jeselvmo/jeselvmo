function isFunction(arg) {
    return typeof arg === 'function' || {}.toString.call(arg) === "[object Function]";
}

export default isFunction;
