import isIDCard from '../src/isIDCard';

describe('isIDCard test', () => {
  it('`140501198111035371`是一个有效的身份证号', () => {
    expect(isIDCard('140501198111035371')).toBe(true);
  });

  it('`44090119760311922X`是一个有效的身份证号', () => {
    expect(isIDCard('44090119760311922X')).toBe(true);
  });

  it('`440901197603119220`不是一个有效的身份证号', () => {
    expect(isIDCard('440901197603119220')).toBe(false);
  });
});
