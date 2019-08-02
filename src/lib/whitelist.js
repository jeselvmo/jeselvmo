import assertString from './util/assertString';

/**
 * @desc 删除不在白名单中出现的字符。
 * @param {string} str 需要处理的字符串。
 * @param {string} chars 白名单字符，可以使用RegExp，需要转义的字符，例如白名单(输入'\\[\\])。
 * @returns {string} 返回处理后的字符串。
 *
 * @example
 *
 * jeselvmo.whitelist('abcd123abcd123', 'abcd');
 * //=> "abcdabcd"
 *
 */
export default function whitelist(str, chars) {
  assertString(str);
  return str.replace(new RegExp(`[^${chars}]+`, 'g'), '');
}
