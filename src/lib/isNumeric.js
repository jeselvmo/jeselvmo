import assertString from './util/assertString';

const numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
const numericNoSymbols = /^[0-9]+$/;

/**
 * 检查是否是数字型
 * @param {string} str - 要检查的字符串。
 * @param {Object} [options] - options is an object which defaults to {no_symbols: false}.
 * @param {boolean} [options.no_symbols=false] - the validator will reject numeric strings that feature a symbol (e.g. +, -, or .).
 * @returns {boolean} 真/假
 *
 * @example
 *
 * jeselvmo.isNumeric('1');
 * //=> true
 *
 * jeselvmo.isNumeric('1.00');
 * //=> true
 *
 * jeselvmo.isNumeric('-1.00');
 * //=> true
 *
 * jeselvmo.isNumeric('+1.00');
 * //=> true
 *
 * jeselvmo.isNumeric('+1.00', { no_symbols:true });
 * //=> false
 *
 */
function isNumeric(str, options) {
  assertString(str);
  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }
  return numeric.test(str);
}

export default isNumeric;
