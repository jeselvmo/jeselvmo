export default function strictUriEncode(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    x =>
      // eslint-disable-next-line implicit-arrow-linebreak
      `%${x
        .charCodeAt(0)
        .toString(16)
        .toUpperCase()}`
  );
}
