/**
 * 字符串重复拼接。
 *
 * @param {string} string - 要重复的字符串。
 * @param {number} n - 重复次数。
 */
export default function repeat(string, n) {
  let result = '';
  if (!string || n < 1 || n > Number.MAX_SAFE_INTEGER) {
    return result;
  }
  do {
    if (n % 2) {
      result += string;
    }
    n = Math.floor(n / 2);
    if (n) {
      string += string;
    }
  } while (n);

  return result;
}
