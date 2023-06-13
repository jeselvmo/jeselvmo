import isMD5 from '../src/isMD5';

describe('isMD5 test', () => {
  it('`E10ADC3949BA59ABBE56E057F20F883E`是一个有效的MD5', () => {
    expect(isMD5('E10ADC3949BA59ABBE56E057F20F883E')).toBe(true);
  });

  it('`d0ea9bcd2d343c21e805b25f2b1a27ee`是一个有效的MD5', () => {
    expect(isMD5('d0ea9bcd2d343c21e805b25f2b1a27ee')).toBe(true);
  });

  it('`2D343C21E805B25F`不是一个有效的MD5', () => {
    expect(isMD5('2D343C21E805B25F')).toBe(false);
  });

  it('`2d343c21e805b25f`不是一个有效的MD5', () => {
    expect(isMD5('2d343c21e805b25f')).toBe(false);
  });
});
