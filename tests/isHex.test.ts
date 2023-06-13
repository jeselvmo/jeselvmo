import isHex from '../src/isHex';

describe('isHex test', () => {
  it('`1`是一个有效的十六进制', () => {
    expect(isHex('1')).toBe(true);
  });

  it('`1F`是一个有效的十六进制', () => {
    expect(isHex('1F')).toBe(true);
  });

  it('`1A`是一个有效的十六进制', () => {
    expect(isHex('1A')).toBe(true);
  });

  it('`3G`不是一个有效的十六进制', () => {
    expect(isHex('3G')).toBe(false);
  });
});
