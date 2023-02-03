/**
 * Convert to amount in words.
 *
 * @since 3.0.0
 * @category Number
 * @param  {number} number The number to convert.
 * @return {string} Returns the converted string.
 * @example
 *
 * digitUpperCase(0)
 * // => "零元整"
 *
 * digitUpperCase(0.01)
 * // => "壹分"
 *
 * digitUpperCase(100)
 * // => "壹佰元整"
 *
 * digitUpperCase(100.5)
 * // => "壹佰元伍角"
 *
 * digitUpperCase(1000.01)
 * // => "壹仟元壹分"
 */
function digitUpperCase(number: number): string {
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ];
  const head = number < 0 ? '欠' : '';
  number = Math.abs(number);
  let s = '';
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(number * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  number = Math.floor(number);
  for (let i = 0; i < unit[0].length && number > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && number > 0; j++) {
      p = digit[number % 10] + unit[1][j] + p;
      number = Math.floor(number / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return (
    head +
    s
      .replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整')
  );
}

export default digitUpperCase;
