/**
 * 判断是否是Window环境中运行。
 */
export default function isWin() {
  let platform = navigator.platform;
  return platform === 'Win32' || platform === 'Windows';
}
