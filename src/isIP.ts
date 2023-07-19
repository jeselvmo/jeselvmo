const ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
const ipv6Block = /^[0-9A-F]{1,4}$/i;

/**
 * Checks if `value` is a IP adress.
 *
 * @since 2.1.0
 * @category Validate
 * @param {string} value The value to check.
 * @param {number} [version] The IP version.（4、6）
 * @returns {boolean} Returns `true` if `value` is a IP adress, else `false`.
 * @example
 *
 * isIP('172.16.0.207')
 * // => true
 *
 * isIP('localhost')
 * // => false
 *
 * isIP('127.0.0.1')
 * // => true
 *
 * isIP('127.0.0.1000')
 * // => false
 *
 */
function isIP(value: string, version?: number): boolean {
  if (!version) {
    return isIP(value, 4) || isIP(value, 6);
  } else if (version === 4) {
    if (!ipv4Maybe.test(value)) {
      return false;
    }
    const parts = value.split('.').sort((a, b) => Number(a) - Number(b));
    return Number(parts[3]) <= 255;
  } else if (version === 6) {
    const blocks = value.split(':');
    let foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    const foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    const expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (value === '::') {
      return true;
    } else if (value.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (value.substr(value.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (let i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}

export default isIP;
