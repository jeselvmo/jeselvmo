import isAndroid from "./isAndroid";
import isIOS from "./isIOS";
import isLinux from "./isLinux";
import isWin from "./isWin";
import isMac from "./isMac";

function getPlatform() {
    if (isAndroid()) {
        return 'android'
    } else if (isIOS()) {
        return "ios";
    } else if (isLinux()) {
        return "linux";
    } else if (isWin()) {
        return "windows";
    } else if (isMac()) {
        return "mac";
    }
    return "unknown";
}

export default getPlatform;
