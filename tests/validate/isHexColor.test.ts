import isHexColor from '../../src/isHexColor';

describe('isHexColor test', () => {
  it('`#FFFFFF`是一个有效的十六进制颜色', () => {
    expect(isHexColor('#FFFFFF')).toBe(true);
  });

  it('`#FFFFFFFF`不是一个有效的十六进制颜色', () => {
    expect(isHexColor('#FFFFFFFF')).toBe(false);
  });
});
