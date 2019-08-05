import assertString from './util/assertString';

/**
 * 删除在黑名单中出现的字符。
 * @param {string} str 需要处理的字符串。
 * @param {string} chars 黑名单字符，可以使用RegExp，需要转义的字符，例如白名单(输入'\\[\\])。
 * @returns {string} 返回处理后的字符串。
 *
 * @example
 *
 * jeselvmo.blacklist('abcd123abcd123', 'abcd');
 * //=> "123123"
 *
 */
function blacklist(str, chars) {
  assertString(str);
  return str.replace(new RegExp(`[${chars}]+`, 'g'), '');
}

export default blacklist;
