import delay from './delay';

const loaded = {};

const loadScript = function (url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = function () {
      resolve();
    };
    script.onerror = function () {
      reject(new Error('Error loading script.'));
    };
    document.body.appendChild(script);
  });
};

const loadCss = function (url) {
  return new Promise((resolve, reject) => {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = url;
    style.onload = function () {
      resolve();
    };
    style.onerror = function () {
      reject(new Error('Error loading css.'));
    };
    document.head.appendChild(style);
  });
};

const load = function (url) {
  if (loaded[url] === 'done') {
    return loaded[url];
  } else if (loaded[url] === 'loading') {
    return delay(50).then(() => load(url));
  } else {
    loaded[url] = 'loading';
    return (url.indexOf('.css') >= 0 ? loadCss(url) : loadScript(url)).then(() => {
      loaded[url] = 'done';
      return loaded[url];
    });
  }
};

/**
 * 异步加载js/css库 (IE9+)。
 * @param {string|Array} srcs 资源URL路径
 * @returns {Promise} 返回Promise对象
 */
function loadjs(srcs) {
  srcs = Array.isArray(srcs) ? srcs : srcs.split(/\s+/);

  let promise = Promise.resolve();
  srcs.forEach((src) => {
    promise = promise.then(() => load(src));
  });
  return promise;
}

export default loadjs;
