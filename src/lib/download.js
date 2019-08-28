/**
 * 下载资源文件。
 * @param {string} url - 要下载的资源路径。
 * @param {string} [filename] - 指定文件名。
 * @returns {void}
 */
function download(url, filename) {
  let a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

export default download;
