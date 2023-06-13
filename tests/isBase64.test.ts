import isBase64 from '../src/isBase64';

describe('isBase64 test', () => {
  it('`ZmFzZGZhc2Rm`是一个有效的Base64', () => {
    expect(isBase64('ZmFzZGZhc2Rm')).toBe(true);
  });

  it('`Y2FzZGFzZA==`是一个有效的Base64', () => {
    expect(isBase64('Y2FzZGFzZA==')).toBe(true);
  });

  it('`localhost`不是一个有效的Base64', () => {
    expect(isBase64('localhost')).toBe(false);
  });

  it('`127001000`不是一个有效的Base64', () => {
    expect(isBase64('127.0.0.1000')).toBe(false);
  });
});
