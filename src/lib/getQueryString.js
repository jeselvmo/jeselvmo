import qs from 'query-string';
import assertString from './util/assertString';

/**
 * 获取URL中的QueryString。
 * @param  {string} string query string，传入location.search 或 location.hash。
 * @param  {object} options 解析选项，参考query-string文档。
 * @returns {Object} 返回全部参数
 *
 * @example
 *
 * jeselvmo.getQueryString();
 * //=> {asdfasf: '1', name: 'yangkk'}
 *
 * jeselvmo.getQueryString('http://localhost:9000/?asdfasf=1#/course?name=yangkk');
 * //=> {asdfasf: '1', name: 'yangkk'}
 *
 */
function getQueryString(string, options) {
  switch (arguments.length) {
    case 0:
      string = location.href;
      break;
    case 1:
      if (typeof string === 'object') {
        options = string;
        string = location.href;
      }
      break;
    default:
      break;
  }
  assertString(string);
  const arr = string.split(/\?|#/);
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    arr[i] = qs.parse(str.includes('=') ? str : '', options);
  }

  return Object.assign({}, ...arr);
}

export default getQueryString;
