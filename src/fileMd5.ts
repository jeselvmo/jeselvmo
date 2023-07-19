import SparkMD5 from 'spark-md5';

/**
 * Performs the md5 hash on a file.
 *
 * @since 3.0.0
 * @category Utils
 * @param  {Blob} file The file to MD5 hash.
 * @returns {Promise<string>} Returns the Promise object.
 * @example
 *
 * jeselvmo.fileMd5(new Blob(['123456']))
 * // => Promise {<pending>}
 * // => 'e10adc3949ba59abbe56e057f20f883e'
 *
 */
function fileMd5(file: Blob): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const blobSlice = Blob.prototype.slice;
    const chunkSize = 1048576; // 每次读取1MB
    const spark = new SparkMD5.ArrayBuffer();
    let start = 0;

    const loadNext = () => {
      const fileReader = new FileReader();
      const end = start + chunkSize >= file.size ? file.size : start + chunkSize;
      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
      fileReader.onload = (e: any) => {
        spark.append(e.target.result);
        if (end < file.size) {
          start = end;
          loadNext();
        } else {
          const result = spark.end();
          resolve(result);
        }
      };
      fileReader.onerror = () => {
        reject(new Error('read error.'));
      };
    };

    loadNext();
  });
}

export default fileMd5;
