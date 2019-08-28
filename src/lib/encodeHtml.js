import assertString from './util/assertString';

/**
 * HTML转义。
 * @param {string} html HTML文本。
 * @returns {string} 编码文本。
 *
 * @example
 *
 * jeselvmo.encodeHtml('&"\'<>/\\`');
 * //=> "&amp;&quot;&#x27;&lt;&gt;&#x2F;&#x5C;&#96;"
 *
 * jeselvmo.encodeHtml('<link rel="stylesheet" href="https://static.npmjs.com/styles.266813287b9e37ad5d9c.css" />');
 * //=> "&lt;link rel=&quot;stylesheet&quot; href=&quot;https:&#x2F;&#x2F;static.npmjs.com&#x2F;styles.266813287b9e37ad5d9c.css&quot; &#x2F;&gt;"
 */
function encodeHtml(html) {
  assertString(html);
  return html
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\//g, '&#x2F;')
    .replace(/\\/g, '&#x5C;')
    .replace(/`/g, '&#96;');
}

export default encodeHtml;
