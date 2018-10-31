import isInt from "./isInt";

function isPort(str) {
    return isInt(str, {min: 0, max: 65535});
}

export default isPort;
