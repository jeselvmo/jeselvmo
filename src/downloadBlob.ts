/**
 * Download blob data.
 *
 * @since 2.1.0
 * @category Web
 * @param {string} blob The blob data to download.
 * @param {string} filename The file name to download.
 * @returns {void}
 * @example
 *
 * downloadBlob(new Blob(['123']), '123.txt')
 *
 */
function downloadBlob(blob: Blob, filename: string): void {
  const URL = window.URL || window.webkitURL;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  // 收尾工作，从内存中移除URL对象
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

export default downloadBlob;
