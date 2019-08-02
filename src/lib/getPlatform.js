import isAndroid from './isAndroid';
import isIOS from './isIOS';
import isLinux from './isLinux';
import isWin from './isWin';
import isMac from './isMac';

/**
 * 获取当前平台。
 * @returns {string}
 */
export default function getPlatform() {
  if (isAndroid()) {
    return 'android';
  }
  if (isIOS()) {
    return 'ios';
  }
  if (isLinux()) {
    return 'linux';
  }
  if (isWin()) {
    return 'windows';
  }
  if (isMac()) {
    return 'mac';
  }
  return 'unknown';
}
