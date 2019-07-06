/* eslint-disable prefer-rest-params */
import queryString from './query-string/index';

function getQueryString() {
  let url, name;
  switch (arguments.length) {
    case 0:
      url = location.href;
      break;
    case 1:
      url = location.href;
      name = arguments[0];
      break;
    case 2:
      url = arguments[0];
      name = arguments[1];
      break;
    default:
      break;
  }

  let { query } = queryString.parseUrl(url);
  if (name) {
    return query[name];
  }
  return query;
}

export default getQueryString;
