import downloadBlob from './downloadBlob';

/**
 * Download data.
 *
 * @since 2.1.0
 * @category Web
 * @param {string} url The url to download.
 * @param {string} type Them file type to download.
 * @param {string} filename The file name to save.
 * @returns {void}
 * @example
 *
 * const content = 'yangkk';
 * downloadData(content, 'text/plain', 'yangkk.txt')
 *
 * const buffer = new ArrayBuffer(8);
 * downloadData(buffer, 'application/pdf;charset=utf-8', 'empty.pdf')
 *
 */
function downloadData(data: string, type: string, filename: string) {
  const blob = new Blob([data], { type });
  downloadBlob(blob, filename);
}

export default downloadData;
