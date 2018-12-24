/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
function parseQueryString(url) {
  let ele = null;
  if (url) {
    ele = document.createElement('a');
    ele.href = url;
  } else {
    ele = window.location;
  }

  var search = ele.search.replace('?', '');
  if (search === '') return {};
  search = search.split('&');
  var query = {};
  for (var i = 0; i < search.length; i++) {
    var pair = search[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

export default parseQueryString;
