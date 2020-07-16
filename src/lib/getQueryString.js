/* eslint-disable prefer-rest-params */
import qs from 'querystringify';

/**
 * 获取URL中的QueryString。
 * @param  {string} name -
 * @returns {Object} 返回单项或全部项。
 */
function getQueryString(name) {
  let params = qs.parse(location.search);
  if (name) {
    return params[name];
  }
  return params;
}

export default getQueryString;
