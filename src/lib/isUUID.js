import assertString from './util/assertString';

const uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

/**
 * 判断是不是UUID。
 * @param {string} str - 要验证的字符串。
 * @param {string} [version] - UUID版本(version 3, 4 or 5)。
 */
export default function isUUID(str, version = 'all') {
  assertString(str);
  const pattern = uuid[version];
  return pattern && pattern.test(str);
}
