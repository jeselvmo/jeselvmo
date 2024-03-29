/**
 * Encode the html string.
 *
 * @since 3.0.0
 * @category String
 * @param {string} string The html string to encode.
 * @returns {string} Returns the encoded html string.
 * @example
 *
 * encodeHtml('&"\'<>/\\`')
 * // => "&amp;&quot;&#x27;&lt;&gt;&#x2F;&#x5C;&#96;"
 *
 * encodeHtml('<link rel="stylesheet" href="https://static.npmjs.com/styles.266813287b9e37ad5d9c.css" />')
 * // => "&lt;link rel=&quot;stylesheet&quot; href=&quot;https:&#x2F;&#x2F;static.npmjs.com&#x2F;styles.266813287b9e37ad5d9c.css&quot; &#x2F;&gt;"
 *
 */
function encodeHtml(string: string): string {
  return string
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
