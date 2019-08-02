import rtrim from './rtrim';
import ltrim from './ltrim';

/**
 * 移除字符串两侧的空白字符或其他预定义字符。
 * @param {string} str 必需。规定要检查的字符串。
 * @param {string} chars 可选。规定从字符串中删除哪些字符。如果被省略，则移除所有空白字符。
 */
export default function trim(str, chars) {
  return rtrim(ltrim(str, chars), chars);
}
