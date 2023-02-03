const uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
};

/**
 * Checks if `value` is a UUID.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string} value The value to check.
 * @param {string} [version] The UUID Version, (version: 3, 4, 5 or all)
 * @returns {boolean} Returns `true` if `value` is a UUID, else `false`.
 *
 * @example
 *
 * isUUID('424a9ae0-0d39-4b28-9f24-446c8572de57')
 * // => true
 *
 */
function isUUID(value: string, version: string | number = 'all'): boolean {
  const pattern = uuid[version];
  return pattern && pattern.test(value);
}

export default isUUID;
