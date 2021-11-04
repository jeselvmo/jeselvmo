/**
 * dataURL转blob对象。
 * @param {string} dataURL dataURL
 * @returns {Blob} Blob对象
 *
 * @example
 *
 * jeselvmo.dataURLToBlob('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...');
 * //=> Blob {size: 63663, type: 'image/jpeg'}
 *
 */
function dataURLToBlob(dataURL) {
  let arr = dataURL.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

export default dataURLToBlob;
