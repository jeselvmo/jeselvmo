import download from './download';

/**
 * 下载blob数据。
 * @param {string} content - 要下载blob内容。
 * @param {string} [filename] - 指定文件名。
 * @returns {void}
 *
 * @example
 *
 * jeselvmo.downloadBlob('yangkk', '123.txt');
 *
 */
function downloadBlob(content, filename) {
  let blob = new Blob([content]);
  let url = URL.createObjectURL(blob);
  download(url, filename);
}

export default downloadBlob;
