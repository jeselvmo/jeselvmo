/* eslint-disable no-bitwise,prefer-template */
/**
 *
 * 随机生成颜色。
 * @returns {string} 返回生成的颜色值。
 */
function randomColor() {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
}

export default randomColor;
