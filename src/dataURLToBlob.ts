/* eslint-disable prefer-const */
/**
 * Convert dataURL to blob object.
 *
 * @since 2.1.0
 * @category Utils
 * @param {string} dataURL The dataURL string.
 * @returns {Blob} Returns the converted blob object.
 * @example
 *
 * dataURLToBlob('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...')
 * // => Blob {size: 63663, type: 'image/jpeg'}
 */
function dataURLToBlob(dataURL: string): Blob {
  let arr = dataURL.split(','),
    mime,
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  if (arr && arr.length >= 2) {
    let match = arr[0].match(/:(.*?);/);
    mime = match ? match[1] : undefined;
  }

  return new Blob([u8arr], { type: mime });
}

export default dataURLToBlob;
