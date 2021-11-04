/**
 * 格式化数值。
 * Short, fast, flexible yet standalone.
 * Accept standard number formatting like #,##0.00 or with negation -000.####.
 * Accept any country format like # ##0,00, #,###.##, #'###.## or any type of non-numbering symbol.
 * Accept any numbers of digit grouping. #,##,#0.000 or #,###0.## are all valid.
 * Accept any redundant/fool-proof formatting. ##,###,##.# or 0#,#00#.###0# are all OK.
 * Auto number rounding.
 * Simple interface, just supply mask & value like this: format( "0.0000", 3.141592).
 * Include a prefix & suffix with the mask.
 * The code is safe to be minimized using Google Compiler in Advanced mode.
 *
 * @param {number} value - 要格式化的值。
 * @param {string} mask - 格式。
 * @returns {string} 格式化后的字符串。
 *
 * @example
 *
 * jeselvmo.formatNum(10, '0.00');
 * //=> "10.00"
 *
 * jeselvmo.formatNum(3.141592, '#.##');
 * //=> "3.14"
 *
 */
function formatNum(value, mask) {
  if (!mask || isNaN(+value)) {
    return value; // return as it is.
  }

  let isNegative,
    result,
    decimal,
    group,
    posLeadZero,
    posTrailZero,
    posSeparator,
    part,
    szSep,
    integer,
    // find prefix/suffix
    len = mask.length,
    start = mask.search(/[0-9\-\+#]/),
    prefix = start > 0 ? mask.substring(0, start) : '',
    // reverse string: not an ideal method if there are surrogate pairs
    str = mask.split('').reverse().join(''),
    end = str.search(/[0-9\-\+#]/),
    offset = len - end,
    substr = mask.substring(offset, offset + 1),
    indx = offset + (substr === '.' || substr === ',' ? 1 : 0),
    suffix = end > 0 ? mask.substring(indx, len) : '';

  // mask with prefix & suffix removed
  mask = mask.substring(start, indx);

  // convert any string to number according to formation sign.
  value = mask.charAt(0) === '-' ? -value : +value;
  isNegative = value < 0 ? (value = -value) : 0; // process only abs(), and turn on flag.

  // search for separator for grp & decimal, anything not digit, not +/- sign, not #.
  result = mask.match(/[^\d\-\+#]/g);
  decimal = (result && result[result.length - 1]) || '.'; // treat the right most symbol as decimal
  group = (result && result[1] && result[0]) || ','; // treat the left most symbol as group separator

  // split the decimal for the format string if any.
  mask = mask.split(decimal);
  // Fix the decimal first, toFixed will auto fill trailing zero.
  value = value.toFixed(mask[1] && mask[1].length);
  value = `${+value}`; // convert number to string to trim off *all* trailing decimal zero(es)

  // fill back any trailing zero according to format
  posTrailZero = mask[1] && mask[1].lastIndexOf('0'); // look for last zero in format
  part = value.split('.');
  // integer will get !part[1]
  if (!part[1] || (part[1] && part[1].length <= posTrailZero)) {
    value = (+value).toFixed(posTrailZero + 1);
  }
  szSep = mask[0].split(group); // look for separator
  mask[0] = szSep.join(''); // join back without separator for counting the pos of any leading 0.

  posLeadZero = mask[0] && mask[0].indexOf('0');
  if (posLeadZero > -1) {
    while (part[0].length < mask[0].length - posLeadZero) {
      part[0] = `0${part[0]}`;
    }
  } else if (+part[0] === 0) {
    part[0] = '';
  }

  value = value.split('.');
  value[0] = part[0];

  // process the first group separator from decimal (.) only, the rest ignore.
  // get the length of the last slice of split result.
  posSeparator = szSep[1] && szSep[szSep.length - 1].length;
  if (posSeparator) {
    integer = value[0];
    str = '';
    offset = integer.length % posSeparator;
    len = integer.length;
    for (indx = 0; indx < len; indx++) {
      str += integer.charAt(indx); // ie6 only support charAt for sz.
      // -posSeparator so that won't trail separator on full length
      /* jshint -W018 */
      if (!((indx - offset + 1) % posSeparator) && indx < len - posSeparator) {
        str += group;
      }
    }
    value[0] = str;
  }
  value[1] = mask[1] && value[1] ? decimal + value[1] : '';

  // remove negative sign if result is zero
  result = value.join('');
  if (result === '0' || result === '') {
    // remove negative sign if result is zero
    isNegative = false;
  }

  // put back any negation, combine integer and fraction, and add back prefix & suffix
  return prefix + ((isNegative ? '-' : '') + result) + suffix;
}

export default formatNum;
