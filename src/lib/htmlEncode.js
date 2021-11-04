/**
 * HTML转义。
 * @param {string} html HTML文本
 * @returns {string} 编码文本
 *
 * @example
 *
 * jeselvmo.htmlEncode('&"\'<>/\\`');
 * //=> "&amp;&quot;&#x27;&lt;&gt;&#x2F;&#x5C;&#96;"
 *
 * jeselvmo.htmlEncode('<link rel="stylesheet" href="https://static.npmjs.com/styles.266813287b9e37ad5d9c.css" />');
 * //=> '&lt;link rel="stylesheet" href="https://static.npmjs.com/styles.266813287b9e37ad5d9c.css" /&gt;'
 *
 */
function htmlEncode(html = '') {
  let temp = document.createElement('div');
  // eslint-disable-next-line no-unused-expressions
  temp.textContent != null ? (temp.textContent = html) : (temp.innerText = html);
  let output = temp.innerHTML;
  temp = null;
  return output;
}

export default htmlEncode;
