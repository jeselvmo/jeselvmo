/**
 * 读取文件，并返回指定类型。
 * @param {File} file - File对象。
 * @param {string} asType - 读写类型，类型有DataURL，ArrayBuffer，Text，BinaryString。
 * @returns {object} object。
 *
 * @example
 *
 * jeselvmo.readFile(file, 'ArrayBuffer');
 * //=>
 *
 * jeselvmo.readFile(file, 'Text');
 * //=>
 *
 * jeselvmo.readFile(file, 'BinaryString');
 * //=>
 *
 */
function readFile(file, asType) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (obj, err) => {
      reject(err);
    };
    if (asType === 'ArrayBuffer') {
      reader.readAsArrayBuffer(file);
    } else if (asType === 'Text') {
      reader.readAsText(file);
    } else if (asType === 'BinaryString') {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsDataURL(file);
    }
  });
}
export default readFile;
