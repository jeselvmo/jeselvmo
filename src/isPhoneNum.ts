/**
 * Checks if `value` is a phone number.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a phone number, else `false`.
 * @example
 *
 * isPhoneNum('15901097100')
 * // => true
 *
 * isPhoneNum('159010971')
 * // => false
 *
 * isPhoneNum('660600606')
 * // => false
 *
 *
 */
function isPhoneNum(value: string): boolean {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(value);
}

export default isPhoneNum;
