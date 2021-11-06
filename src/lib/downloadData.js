import downloadBlob from './downloadBlob';

/**
 * 下载数据。
 * @param {string} url  要下载的内容
 * @param {string} type  内容类型
 * @param {string} filename  指定文件名
 * @returns {void}
 *
 * @example
 *
 * const content = 'yangkk';
 * jeselvmo.downloadData(content, 'text/plain', 'yangkk.txt');
 *
 * const buffer = new ArrayBuffer(8);
 * jeselvmo.downloadData(buffer, 'application/pdf;charset=utf-8', 'empty.pdf');
 *
 */
function downloadData(data, type, filename) {
  const blob = new Blob([data], { type });
  downloadBlob(blob, filename);
}

export default downloadData;
