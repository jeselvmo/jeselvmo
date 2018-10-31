import isObject from "./isObject";
import objectToString from "./objectToString";

function isDate(arg) {
    return isObject(arg) && objectToString(arg) === '[object Date]';
}

export default isDate;
