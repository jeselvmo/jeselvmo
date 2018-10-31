function stringify(val) {
    return val === undefined || typeof val === "function" ? val + "" : JSON.stringify(val);
}

export default stringify;
