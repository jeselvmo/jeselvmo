/**
 * 生成指定范围[min, max]的随机数。
 * @param  {number} min - 范围最大值。
 * @param  {number} max - 范围最大值。
 * @return {number} 生成的随机数。
 *
 * @example
 *
 * jeselvmo.randomNum(0,100);
 * //=> 43
 *
 * jeselvmo.randomNum(0,100);
 * //=> 10
 *
 */
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default randomNum;
