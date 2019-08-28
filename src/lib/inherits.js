/* eslint-disable no-underscore-dangle */
/**
 * 类继承
 * @param {function} ctor 子类构造方法
 * @param {function} superCtor 父类构造方法
 * @returns {void}
 */
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}

export default inherits;
