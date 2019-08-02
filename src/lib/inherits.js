/* eslint-disable no-underscore-dangle */
/**
 * 类继承
 * @param {function} ctor
 * @param {function} superCtor
 * @returns {void}
 */
export default function inherits(ctor, superCtor) {
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
