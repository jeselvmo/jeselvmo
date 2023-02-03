import downloadBlob from './downloadBlob';

/**
 * Download the network resource file.
 *
 * @since 3.0.0
 * @category Web
 * @param {string} url the network resource url to download.
 * @param {string} filename the file name to download.
 * @returns {void}
 * @example
 *
 * download('https://cdnbeecode.ljlx.com/Obj_KidsCode/scratch_res_lib/assets/ba/ce/dd1457083af1ef02d7d150ede1ba.png')
 *
 */
function download(url: string, filename: string): Promise<void> {
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.blob();
      }
      throw new Error(`${res.status} (${res.statusText})`);
    })
    .then(blob => downloadBlob(blob, filename));
}

export default download;
