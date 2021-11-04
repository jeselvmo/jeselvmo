/**
 * 检查密码强度等级。
 * @param  {string} str 传入的密码串
 * @returns {number} 返回的强度等级（最高为4级）
 *
 * @example
 *
 * jeselvmo.checkPasswordLevel('123456');
 * //=> 1
 *
 * jeselvmo.checkPasswordLevel('123456abcd');
 * //=> 2
 *
 * jeselvmo.checkPasswordLevel('123456abcdYUI');
 * //=> 3
 *
 * jeselvmo.checkPasswordLevel('123456abcdYUI._-');
 * //=> 4
 *
 */
function checkPasswordLevel(str) {
  if (typeof str === 'string') {
    let level = 0;
    if (str.length < 5) {
      return level;
    }
    if (/[0-9]/.test(str)) {
      level++;
    }
    if (/[a-z]/.test(str)) {
      level++;
    }
    if (/[A-Z]/.test(str)) {
      level++;
    }
    if (/[\.|-|_]/.test(str)) {
      level++;
    }
    return level;
  }
  // eslint-disable-next-line no-throw-literal
  throw 'Incorrect Parameter Type！';
}

export default checkPasswordLevel;
