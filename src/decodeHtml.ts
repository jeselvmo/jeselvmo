/**
 * Decode the html string.
 *
 * @since 2.1.0
 * @category String
 * @param {string} string The html string to decode.
 * @returns {string} Returns the decoded html string.
 * @example
 *
 * decodeHtml('&amp;&quot;&#x27;&lt;&gt;&#x2F;&#x5C;&#96;')
 * // => "&"'<>/\`"
 *
 * decodeHtml('&lt;link rel=&quot;stylesheet&quot; href=&quot;https:&#x2F;&#x2F;static.npmjs.com&#x2F;styles.266813287b9e37ad5d9c.css&quot; &#x2F;&gt;')
 * // => '<link rel="stylesheet" href="https://static.npmjs.com/styles.266813287b9e37ad5d9c.css" />'
 *
 */
function decodeHtml(string: string): string {
  return string
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
