import getLocalItem from './getLocalItem';
import findScript from './findScript';
import parseUrl from './parseUrl';

export const ACTIVE_ERUDA = 'active-eruda';

// 添加eruda调度工具
function loadEruda() {
  if (/eruda=true/.test(window.location) || getLocalItem(ACTIVE_ERUDA)) {
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
}

let script = findScript('jeselvmo');
if (script && script.src) {
  let { query } = parseUrl(script.src);
  if (query.debug === null || query.debug === 'true') {
    loadEruda();
  }
}

export default loadEruda;
