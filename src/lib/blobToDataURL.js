/**
 * blob to dataURL
 * @param {Blob} blob - Blob对象。
 * @returns {string} dataURL。
 */
function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = e => {
      resolve(e.target.result);
    };
    reader.onerror = (obj, err) => {
      reject(err);
    };
    reader.readAsDataURL(blob);
  });
}
export default blobToDataURL;
