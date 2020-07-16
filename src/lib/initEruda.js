/* eslint-disable wrap-iife */
import getLocalItem from './getLocalItem';
import setLocalItem from './setLocalItem';
import loadEruda from './loadEruda';

const ACTIVE_ERUDA = 'eruda-active';

const times = 20; // 点击次数
const limit = 30000; // 限定时间（秒）

let count = 0; // 累计次数

let timer5 = null;

// handle click
const handleClick = () => {
  if (timer5) {
    clearTimeout(timer5);
    timer5 = null;
  }
  count++;
  // console.log('eruda click -> count', count);
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
  } else {
    // 间隔500毫秒，重新计数
    timer5 = setTimeout(() => {
      count = 0;
    }, 500);
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
  console.log('eruda click start ......');
  setTimeout(() => {
    document.removeEventListener('click', handleClick);
    console.log('eruda click end!');
  }, limit); // 几秒后清除
}

export default initEruda;
