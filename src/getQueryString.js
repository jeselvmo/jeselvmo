import parseQueryString from './parseQueryString';

function getQueryString() {
  if (arguments.length === 0) {
    return parseQueryString();
  } else if (arguments.length === 1) {
    return parseQueryString()[arguments[0]];
  } else if (arguments.length === 2) {
    return parseQueryString(arguments[0])[arguments[1]];
  }
  return null;
}

export default getQueryString;
