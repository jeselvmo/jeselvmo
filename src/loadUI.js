const loaded = {};

const loadScript = function(src) {
  if (loaded[src]) return loaded[src];
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = function(e) {
      resolve(e);
    };
    script.onerror = function(e) {
      reject(e);
    };
    document.body.appendChild(script);
    loaded[src] = true;
  });
};

const loadCSS = function(href) {
  if (loaded[href]) return loaded[href];

  return new Promise((resolve, reject) => {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = href;
    style.onload = function(e) {
      resolve(e);
    };
    style.onerror = function(e) {
      reject(e);
    };
    document.head.appendChild(style);
    loaded[href] = true;
  });
};

const loadUI = function(srcs) {
  srcs = Array.isArray(srcs) ? srcs : srcs.split(/\s+/);

  let promise = Promise.resolve();
  srcs.forEach(src => {
    promise = promise.then(() => {
      return src.indexOf('.css') >= 0 ? loadCSS(src) : loadScript(src);
    });
  });
  return promise;
};

export default loadUI;
