import SparkMD5 from 'spark-md5';

/**
 * Performs the md5 hash on a string.
 * A conversion will be applied if utf8 string is detected.
 *
 * @since 3.0.0
 * @category Utils
 * @param {String}  str The string
 * @param {Boolean} [raw] True to get the raw string, false to get the hex string
 *
 * @return {String} The result
 * @example
 *
 * md5('123456')
 * // => 'e10adc3949ba59abbe56e057f20f883e'
 *
 */
function md5(str: string, raw?: boolean): string {
  return SparkMD5.hash(str, raw);
}

export default md5;
