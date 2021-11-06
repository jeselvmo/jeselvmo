import downloadBlob from './downloadBlob';

/**
 * 下载网络资源文件。
 * @param {string} url - 要下载的资源路径。
 * @param {string} filename - 指定文件名。
 * @returns {void}
 *
 * @example
 *
 * jeselvmo.download('https://cdnbeecode.ljlx.com/Obj_KidsCode/scratch_res_lib/assets/ba/ce/dd1457083af1ef02d7d150ede1ba.png');
 *
 */
function download(url, filename) {
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.blob();
      }
      throw new Error(`${res.status} (${res.statusText})`);
    })
    .then((blob) => downloadBlob(blob, filename));
}

export default download;
