const lat = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
const long = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;

/**
 * Checks if `value` is longitude and latitude coordinate.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string|number[]} value The value to check.
 * @returns {boolean} Returns `true` if `value` is longitude and latitude coordinate, else `false`.
 * @example
 *
 * isLatLong('116.40741300000002,39.904214')
 * // => true
 *
 * isLatLong([116.40741300000002,39.904214])
 * // => true
 *
 */
function isLatLong(value: string | number[]): boolean {
  let latLong: number[] = [];
  if (typeof value === 'string' && value.includes(',')) {
    latLong = value.split(',').map(v => Number(v));
  } else if (typeof value === 'object' && Array.isArray(value) && value.length >= 2) {
    latLong = value;
  } else {
    return false;
  }
  return lat.test(String(latLong[0])) && long.test(String(latLong[1]));
}

export default isLatLong;
