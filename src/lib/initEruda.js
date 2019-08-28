/* eslint-disable wrap-iife */
import getLocalItem from './getLocalItem';
import setLocalItem from './setLocalItem';
import loadEruda from './loadEruda';

const ACTIVE_ERUDA = 'eruda-active';

const times = 20; // 点击次数
const limit = 5000; // 限定时间（秒）
const areaSize = 100; // 点击区域大小

let count = 0; // 累计次数
let area = null; // 点击区域

// 验证点击同一块区域为有效
function validClickArea(e) {
  if (area) {
    if (e.x > area.x1 && e.x < area.x2 && e.y > area.y1 && e.y < area.y2) {
      return;
    }
  } else {
    area = {
      x1: e.x - areaSize / 2,
      y1: e.y - areaSize / 2,
      x2: e.x + areaSize / 2,
      y2: e.y + areaSize / 2
    };
    return;
  }
  // 不是同一个区域
  area = null;
  count = 0;
  validClickArea(e);
}

// handle click
const handleClick = e => {
  validClickArea(e);
  count++;
  if (count >= times) {
    let activeEruda = getLocalItem(ACTIVE_ERUDA) || false;
    activeEruda = !activeEruda;
    setLocalItem(ACTIVE_ERUDA, activeEruda);
    if (activeEruda) {
      if (!window.eruda) {
        loadEruda();
      } else {
        window.eruda.init();
      }
    } else if (window.eruda) {
      window.eruda.destroy();
    }
    count = 0;
  }
};

/**
 * 初始化Eruda，并添加触发事件。
 * @returns {void}
 */
function initEruda() {
  // 初始化Eruda
  if (/eruda=true/.test(window.location) || getLocalItem(ACTIVE_ERUDA)) {
    loadEruda();
  }
  // 添加触发事件
  document.addEventListener('click', handleClick);
  setTimeout(() => {
    document.removeEventListener('click', handleClick);
  }, limit); // 几秒后清除
}

export default initEruda;
