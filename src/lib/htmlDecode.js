/**
 * HTML反转义。
 * @param {string} text 编码文本。
 * @returns {string} HTML文本。
 *
 * @example
 *
 * jeselvmo.htmlDecode('&amp;&quot;&#x27;&lt;&gt;&#x2F;&#x5C;&#96;');
 * //=> "&"'<>/\`"
 *
 * jeselvmo.htmlDecode('&lt;link rel="stylesheet" href="https://static.npmjs.com/styles.266813287b9e37ad5d9c.css" /&gt;');
 * //=> '<link rel="stylesheet" href="https://static.npmjs.com/styles.266813287b9e37ad5d9c.css" />'
 */
function htmlDecode(text = '') {
  let temp = document.createElement('div');
  temp.innerHTML = text;
  let output = temp.innerText || temp.textContent;
  temp = null;
  return output;
}

export default htmlDecode;
