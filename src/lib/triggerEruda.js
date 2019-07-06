/* eslint-disable no-plusplus */
import getLocalItem from './getLocalItem';
import setLocalItem from './setLocalItem';
import loadEruda, { ACTIVE_ERUDA } from './loadEruda';
import findScript from './findScript';
import parseUrl from './parseUrl';

let count = 0;
let timer = null;

function reset() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    count = 0;
  }, 1000);
}

// 添加eruda调度工具
function triggerEruda(ele = document, num = 20, limit = 6000) {
  // click
  const handleClick = () => {
    let eruda = window.eruda;
    count++;
    console.log('TCL: triggerEruda -> ', count);
    if (count >= num) {
      let activeEruda = getLocalItem(ACTIVE_ERUDA) || false;
      activeEruda = !activeEruda;
      setLocalItem(ACTIVE_ERUDA, activeEruda);
      if (activeEruda) {
        if (!eruda) {
          loadEruda();
        } else {
          eruda.init();
        }
      } else if (eruda) eruda.destroy();
      count = 0;
    }
    reset();
  };

  ele.addEventListener('click', handleClick);
  console.log('TCL: triggerEruda -> addEventListener');
  // 几后清除
  setTimeout(() => {
    ele.removeEventListener('click', handleClick);
    console.log('TCL: triggerEruda -> removeEventListener');
  }, limit);
}

let script = findScript('jeselvmo');
if (script && script.src) {
  let { query } = parseUrl(script.src);
  if (query.debug === null || query.debug === 'true') {
    triggerEruda(document);
  }
}

export default triggerEruda;
