// Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
const mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len

// Handle "charset" in "text/*"
const mimeTypeText =
  /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len

// Handle "boundary" in "multipart/*"
const mimeTypeMultipart =
  /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

/**
 * Checks if `value` is a valid MIME type.
 *
 * @since 3.0.0
 * @category Validate
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid MIME type, else `false`.
 * @example
 *
 * isMimeType('application/pdf')
 * // => true
 *
 * isMimeType('image/jpeg')
 * // => true
 *
 * isMimeType('text/css')
 * // => true
 *
 */
function isMimeType(value: string): boolean {
  return mimeTypeSimple.test(value) || mimeTypeText.test(value) || mimeTypeMultipart.test(value);
}

export default isMimeType;
