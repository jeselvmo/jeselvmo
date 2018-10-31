import isString from "./isString";
import isDate from "./isDate";

function toDate(date) {
    if (isDate(date)) {
        return date;
    }
    if (isString(date)) {
        date = Date.parse(date);
    }
    return !isNaN(date) ? new Date(date) : null;
}

export default toDate;
