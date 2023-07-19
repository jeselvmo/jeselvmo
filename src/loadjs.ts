import sleep from './sleep';

const loaded = {};

const loadScript = function (url: string): Promise<void> {
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

const loadCss = function (url: string): Promise<void> {
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

const load = function (url: string): Promise<void> {
  if (loaded[url] === 'done') {
    return loaded[url];
  } else if (loaded[url] === 'loading') {
    return sleep(50).then(() => load(url));
  } else {
    loaded[url] = 'loading';
    return (url.indexOf('.css') >= 0 ? loadCss(url) : loadScript(url)).then(() => {
      loaded[url] = 'done';
      return loaded[url];
    });
  }
};

/**
 * Asynchronous loading of the js/css library.
 *
 * @since 2.1.0
 * @category Web
 * @param {string|string[]} srcs The src url to load.
 * @returns {Promise} Returns the promise.
 * @example
 *
 * loadjs([
 *   'https://cdnbeecode.ljlx.com/js/dd1457083af1ef02d7d150ede1ba.js',
 *   'https://cdnbeecode.ljlx.com/css/dd1457083af1ef02d7d150ede1ba.css'
 * ]).then(()=>{
 *   // TODO Load success, then execute.
 * })
 */
function loadjs(srcs: string | string[]): Promise<void> {
  srcs = Array.isArray(srcs) ? srcs : [srcs];

  let promise = Promise.resolve();
  srcs.forEach(src => {
    promise = promise.then(() => load(src));
  });
  return promise;
}

export default loadjs;
