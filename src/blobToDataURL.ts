/**
 * Convert blob object to DataURL.
 *
 * @since 3.0.0
 * @category Utils
 * @param {Blob} blob The blob object to convert.
 * @returns {Promise<string>} Return the converted DataURL.
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
 *   })
 *
 */
function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      resolve(e?.target?.result as string);
    };
    reader.onerror = e => {
      reject(e);
    };
    reader.readAsDataURL(blob);
  });
}

export default blobToDataURL;
