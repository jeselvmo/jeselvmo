import blobToDataURL from './blobToDataURL';

/**
 * 获取URL的dataURL。
 * @param {string} url - 资源URL
 * @returns {string} dataURL
 *
 * @example
 *
 * getDataURL(
 *   'https://cdnbeecode.ljlx.com/Obj_KidsCode/kidscode_upload/activity_creation_cover_img/e4/2731890b7c0692a810ff8e2e1f9d4f.jpg'
 * ).then((dataURL) => {
 *   console.log(dataURL);
 * });
 *
 */
function getDataURL(url) {
  return fetch(url)
    .then((res) => {
      if (res.ok) return res.blob();
      throw new Error(`${res.status} (${res.statusText})`);
    })
    .then((blob) => blobToDataURL(blob));
}
export default getDataURL;
