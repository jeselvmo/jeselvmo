/**
 * Blob对象转dataURL格式。
 * @param {Blob} blob - Blob对象。
 * @returns {string} dataURL。
 *
 * @example
 *
 * fetch(
 *   'https://cdnbeecode.ljlx.com/Obj_KidsCode/kidscode_upload/activity_creation_cover_img/e4/2731890b7c0692a810ff8e2e1f9d4f.jpg'
 * )
 *   .then((res) => res.blob())
 *   .then((blob) => blobToDataURL(blob))
 *   .then((dataURL) => {
 *     console.log(dataURL);
 *   })
 *   .catch((err) => {
 *     console.log(err);
 *   });
 *
 */
function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (obj, err) => {
      reject(err);
    };
    reader.readAsDataURL(blob);
  });
}
export default blobToDataURL;
