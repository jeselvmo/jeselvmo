/**
 * 判断是否是Window环境中运行。
 * @returns {boolean} 真/假。
 */
function isWin() {
  let platform = navigator.platform;
  return platform === 'Win32' || platform === 'Windows';
}

export default isWin;
