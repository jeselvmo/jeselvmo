/**
 * 对象浅复制
 * @param  {Obejct} obj 被复制的对象
 * @param  {Obejct} res 目标对象
 */
function shallowCopy(obj, res) {
  for (var i in obj) {
    // 判断不是原型的属性
    if (obj.hasOwnProperty(i)) {
      res[i] = obj[i];
    }
  }
}

export default shallowCopy;
