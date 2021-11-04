import loadjs2 from 'loadjs';

/**
 * 异步加载js/css库 (IE9+)。具体参数参考loadjs。
 * @param {string|array} paths 资源路径
 * @param {string|function} arg1 定义一个依赖，或直接使用回调函数。
 * @param {object} [arg2] 选项
 * @returns {function} function
 */
function loadjs(paths, arg1, arg2) {
  return loadjs2(paths, arg1, arg2);
}

export default loadjs;
