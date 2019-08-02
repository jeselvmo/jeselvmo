import getLocalItem from './getLocalItem';
import setLocalItem from './setLocalItem';

const ACTIVE_ERUDA = 'eruda-active';

const times = 20; // 点击次数
const limit = 5000; // 限定时间（秒）
const areaSize = 100; // 点击区域大小

let count = 0; // 累计次数
let area = null;

/**
 * 添加eruda调度工具
 */
function loadEruda() {
  // no reqeat
  if (window.eruda) return;

  let script = document.createElement('script');
  script.src = '//cdn.jsdelivr.net/npm/eruda';
  script.onload = () => {
    window.eruda.init();
  };
  let timer = setInterval(() => {
    if (document.body) {
      document.body.appendChild(script);
      clearInterval(timer);
    }
  }, 10);
}

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

/**
 * 添加触发eruda调度工具。
 */
function triggerEruda() {
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
    // reset();
  };

  document.addEventListener('click', handleClick);
  // 几秒后清除
  setTimeout(() => {
    document.removeEventListener('click', handleClick);
  }, limit);
}

// 初始加载
if (/eruda=true/.test(window.location) || getLocalItem(ACTIVE_ERUDA)) {
  loadEruda();
}
// 添加触发器
triggerEruda();

export default loadEruda;
