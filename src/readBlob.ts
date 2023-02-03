/**
 * Read the blob object and return the specified type.
 *
 * @since 3.0.0
 * @category Utils
 * @param {Blob} blob The blob object to read.
 * @param {string} asType The read type, the value ranges: DataURL, ArrayBuffer, Text, BinaryString.
 * @returns {*} Returns data of the specified type.
 * @example
 *
 * readBlob(file, 'ArrayBuffer')
 * //=>
 *
 * readBlob(file, 'Text')
 * //=>
 *
 * readBlob(file, 'BinaryString')
 * //=>
 *
 */
function readBlob(blob: Blob, asType: 'ArrayBuffer' | 'Text' | 'BinaryString' | 'DataURL' = 'DataURL'): any {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      resolve(e?.target?.result);
    };
    reader.onerror = e => {
      reject(e);
    };
    if (asType === 'ArrayBuffer') {
      reader.readAsArrayBuffer(blob);
    } else if (asType === 'Text') {
      reader.readAsText(blob);
    } else if (asType === 'BinaryString') {
      reader.readAsBinaryString(blob);
    } else if (asType === 'DataURL') {
      reader.readAsDataURL(blob);
    }
  });
}
export default readBlob;
