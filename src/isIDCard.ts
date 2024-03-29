/**
 * Checks if `value` is a ID Card number.
 *
 * @since 3.0.0
 * @category Validate
 * @param  {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a ID Card number, else `false`.
 * @example
 *
 * isIDCard('410322198707001234')
 * // => false
 *
 */
function isIDCard(value: string): boolean {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
    console.log('你输入的身份证长度或格式错误。');
    return false;
  }
  // 身份证城市
  const aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外',
  };

  if (!aCity[parseInt(value.substr(0, 2), 10)]) {
    console.log('你的身份证地区非法。');
    return false;
  }

  // 出生日期验证
  const sBirthday = `${value.substr(6, 4)}-${Number(value.substr(10, 2))}-${Number(value.substr(12, 2))}`.replace(/-/g, '/'),
    d = new Date(sBirthday);
  if (sBirthday != `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`) {
    console.log('身份证上的出生日期非法。');
    return false;
  }

  // 身份证号码校验
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = '10X98765432';
  let sum = 0;
  for (let i = 0; i < value.length - 1; i++) {
    sum += Number(value[i]) * weights[i];
  }
  const last = codes[sum % 11]; // 计算出来的最后一位身份证号码
  if (value[value.length - 1] != last) {
    return false;
  }

  return true;
}

export default isIDCard;
