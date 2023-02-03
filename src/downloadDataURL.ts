import downloadBlob from './downloadBlob';
import dataURLToBlob from './dataURLToBlob';

/**
 * 下载dataURL文件。
 * @param {string} dataURL  要下载的dataURL文件
 * @param {string} filename  指定文件名
 * @returns {void}
 *
 * @example
 *
 * getDataURL('https://cdnbeecode.ljlx.com/Obj_KidsCode/scratch_res_lib/assets/ba/ce/dd1457083af1ef02d7d150ede1ba.png')
 *  .then(dataURL=>jeselvmo.downloadDataURL(dataURL))
 *
 */
function downloadDataURL(dataURL: string, filename: string): void {
  downloadBlob(dataURLToBlob(dataURL), filename);
}

export default downloadDataURL;
