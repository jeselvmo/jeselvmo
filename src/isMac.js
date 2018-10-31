function isMac() {
    let p = navigator.platform;
    return (p === "Mac68K") || (p === "MacPPC") || (p === "Macintosh") || (p === "MacIntel");
}

export default isMac;
