import isFalse from './isFalse';

/**
 * 判断是否为真。
 * @param  {string}  input 检验对象
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isTrue('');
 * //=> false
 *
 * jeselvmo.isTrue(0);
 * //=> false
 *
 *
 */
function isTrue(input) {
  return !isFalse(input);
}

export default isTrue;
