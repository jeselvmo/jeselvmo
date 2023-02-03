declare global {
  interface Window {
    eruda: {
      init: () => void;
      destroy: () => void;
    };
  }
}

/**
 * Load the Eruda debugging tool.
 *
 * @since 3.0.0
 * @category Web
 * @returns {void}
 */
function loadEruda() {
  // no reqeat
  if (window.eruda) return;

  const script = document.createElement('script');
  script.src = '//cdn.jsdelivr.net/npm/eruda';
  script.onload = () => {
    window.eruda.init();
  };
  const timer = setInterval(() => {
    if (document.body) {
      document.body.appendChild(script);
      clearInterval(timer);
    }
  }, 10);
}

export default loadEruda;
