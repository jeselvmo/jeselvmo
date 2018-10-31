function isWin() {
    let platform = navigator.platform;
    return (platform === "Win32") || (platform === "Windows");
}

export default isWin;
