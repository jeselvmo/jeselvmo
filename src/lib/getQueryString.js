/* eslint-disable prefer-rest-params */
import qs from 'query-string';
import isURL from './isURL';

/**
 * 获取URL中的QueryString。
 * @returns {Object} 返回单项或全部项。
 */
function getQueryString() {
  let url, name;
  switch (arguments.length) {
    case 0:
      url = location.href;
      break;
    case 1:
      if (isURL(arguments[0])) {
        url = arguments[0];
      } else {
        url = location.href;
        name = arguments[0];
      }
      break;
    case 2:
      url = arguments[0];
      name = arguments[1];
      break;
    default:
      break;
  }

  let { query } = qs.parseUrl(url);
  if (name) {
    return query[name];
  }
  return query;
}

export default getQueryString;
