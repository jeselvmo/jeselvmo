/* eslint-disable prefer-const */
/**
 * Format the number value.
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
 * @since 2.1.0
 * @category Number
 * @param {number} number The number to format.
 * @param {string} template The template to format.
 * @returns {string} Returns the formatted string.
 * @example
 *
 * formatNumber(10, '0.00')
 * // => "10.00"
 *
 * formatNumber(3.141592, '#.##')
 * // => "3.14"
 *
 */
function formatNumber(number: number, template: string): string {
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
    len = template.length,
    start = template.search(/[0-9\-\+#]/),
    prefix = start > 0 ? template.substring(0, start) : '',
    // reverse string: not an ideal method if there are surrogate pairs
    str = template.split('').reverse().join(''),
    end = str.search(/[0-9\-\+#]/),
    offset = len - end,
    substr = template.substring(offset, offset + 1),
    indx = offset + (substr === '.' || substr === ',' ? 1 : 0),
    suffix = end > 0 ? template.substring(indx, len) : '';

  // mask with prefix & suffix removed
  template = template.substring(start, indx);

  // convert any string to number according to formation sign.
  number = template.charAt(0) === '-' ? -number : +number;
  isNegative = number < 0 ? (number = -number) : 0; // process only abs(), and turn on flag.

  // search for separator for grp & decimal, anything not digit, not +/- sign, not #.
  result = template.match(/[^\d\-\+#]/g);
  decimal = (result && result[result.length - 1]) || '.'; // treat the right most symbol as decimal
  group = (result && result[1] && result[0]) || ','; // treat the left most symbol as group separator

  // split the decimal for the format string if any.
  let templateArr = template.split(decimal);
  // Fix the decimal first, toFixed will auto fill trailing zero.
  let valueStr = number.toFixed(Number(templateArr[1] && templateArr[1].length));
  valueStr = `${+valueStr}`; // convert number to string to trim off *all* trailing decimal zero(es)

  // fill back any trailing zero according to format
  posTrailZero = templateArr[1] && templateArr[1].lastIndexOf('0'); // look for last zero in format
  part = valueStr.split('.');
  // integer will get !part[1]
  if (!part[1] || (part[1] && part[1].length <= posTrailZero)) {
    valueStr = (+number).toFixed(Number(posTrailZero) + 1);
  }
  szSep = templateArr[0].split(group); // look for separator
  templateArr[0] = szSep.join(''); // join back without separator for counting the pos of any leading 0.

  posLeadZero = Number(template[0] && template[0].indexOf('0'));
  if (posLeadZero > -1) {
    while (part[0].length < template[0].length - posLeadZero) {
      part[0] = `0${part[0]}`;
    }
  } else if (+part[0] === 0) {
    part[0] = '';
  }

  let valueArr = valueStr.split('.');
  valueArr[0] = part[0];

  // process the first group separator from decimal (.) only, the rest ignore.
  // get the length of the last slice of split result.
  posSeparator = szSep[1] && szSep[szSep.length - 1].length;
  if (posSeparator) {
    integer = number[0];
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
    number[0] = str;
  }
  number[1] = template[1] && number[1] ? decimal + number[1] : '';

  // remove negative sign if result is zero
  result = valueArr.join('');
  if (result === '0' || result === '') {
    // remove negative sign if result is zero
    isNegative = false;
  }

  // put back any negation, combine integer and fraction, and add back prefix & suffix
  return prefix + ((isNegative ? '-' : '') + result) + suffix;
}

export default formatNumber;
