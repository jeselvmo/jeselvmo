import getOS from "./getOS";

/**
 * 判断是否是Window环境中运行。
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isWin();
 * //=> true
 *
 * jeselvmo.isWin();
 * //=> false
 *
 */
function isWin() {
  return getOS().name === 'Windows';
}

export default isWin;
