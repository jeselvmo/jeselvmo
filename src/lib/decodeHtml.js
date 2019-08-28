import assertString from './util/assertString';

/**
 * HTML反转义。
 * @param {string} str 编码文本
 * @returns {string} HTML文本
 *
 * @example
 *
 * jeselvmo.decodeHtml('&amp;&quot;&#x27;&lt;&gt;&#x2F;&#x5C;&#96;');
 * //=> "&"'<>/\`"
 *
 * jeselvmo.decodeHtml('&lt;link rel=&quot;stylesheet&quot; href=&quot;https:&#x2F;&#x2F;static.npmjs.com&#x2F;styles.266813287b9e37ad5d9c.css&quot; &#x2F;&gt;');
 * //=> '<link rel="stylesheet" href="https://static.npmjs.com/styles.266813287b9e37ad5d9c.css" />'
 */
function decodeHtml(str) {
  assertString(str);
  return str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x2F;/g, '/')
    .replace(/&#x5C;/g, '\\')
    .replace(/&#96;/g, '`');
}

export default decodeHtml;
