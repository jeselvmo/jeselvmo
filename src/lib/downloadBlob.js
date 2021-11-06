/**
 * 下载blob数据。
 * @param {string} blob 指定Blob对象。
 * @param {string} filename - 指定文件名。
 * @returns {void}
 *
 * @example
 *
 * jeselvmo.downloadBlob(new Blob(['123']), '123.txt');
 *
 */
function downloadBlob(blob, filename) {
  const URL = window.URL || window.webkitURL;
  let url = URL.createObjectURL(blob);
  let a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  // 收尾工作，从内存中移除URL对象
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

export default downloadBlob;
