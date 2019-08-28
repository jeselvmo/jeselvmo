/**
 * 添加eruda调度工具
 * @returns {void}
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

export default loadEruda;
