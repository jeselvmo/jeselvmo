/**
 * dataURL to blob
 * @param {string} dataUrl dataUrl
 * @returns {Blob} Blob对象
 */
function dataURLToBlob(dataUrl) {
  let arr = dataUrl.split(','),
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
