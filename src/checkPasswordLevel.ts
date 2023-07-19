/**
 * Check the password strength level.
 *
 * @since 2.1.0
 * @category Utils
 * @param  {string} string The string to check.
 * @returns {number} Returns the password strength level checked.
 * @example
 *
 * checkPasswordLevel('123456')
 * // => 1
 *
 * checkPasswordLevel('123456abcd')
 * // => 2
 *
 * checkPasswordLevel('123456abcdYUI')
 * // => 3
 *
 * checkPasswordLevel('123456abcdYUI._-')
 * // => 4
 *
 */
function checkPasswordLevel(string: string): number {
  let level = 0;
  if (string.length < 5) {
    return level;
  }
  if (/[0-9]/.test(string)) {
    level++;
  }
  if (/[a-z]/.test(string)) {
    level++;
  }
  if (/[A-Z]/.test(string)) {
    level++;
  }
  if (/\W/.test(string)) {
    level++;
  }
  return level;
}

export default checkPasswordLevel;
