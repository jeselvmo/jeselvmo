type WindowSize = {
  width: number;
  height: number;
};

/**
 * Get the current window size.
 *
 * @since 3.0.0
 * @category Web
 * @returns {WindowSize} Returns the window size.
 * @example
 *
 * getWindowSize()
 * // => {width: 1920, height: 150}
 *
 */
function getWindowSize(): WindowSize {
  let width = 0,
    height = 0;
  // 获取窗口宽度
  if (window.innerWidth) width = window.innerWidth;
  else if (document.body && document.body.clientWidth) width = document.body.clientWidth;
  // 获取窗口高度
  if (window.innerHeight) height = window.innerHeight;
  else if (document.body && document.body.clientHeight) height = document.body.clientHeight;
  // 通过深入 Document 内部对 body 进行检测，获取窗口大小
  if (
    document.documentElement && //
    document.documentElement.clientHeight &&
    document.documentElement.clientWidth
  ) {
    height = document.documentElement.clientHeight;
    width = document.documentElement.clientWidth;
  }
  return { width, height };
}

export default getWindowSize;
