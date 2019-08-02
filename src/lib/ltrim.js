import assertString from './util/assertString';

/**
 * 移除字符串左侧的空白字符或其他预定义字符。
 * @param {string} str 必需。规定要检查的字符串。
 * @param {string} chars 可选。规定从字符串中删除哪些字符。如果被省略，则移除所有空白字符。
 */
export default function ltrim(str, chars) {
  assertString(str);
  const pattern = chars ? new RegExp(`^[${chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]+`, 'g') : /^\s+/g;
  return str.replace(pattern, '');
}
