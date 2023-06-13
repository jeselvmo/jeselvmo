import isEmail from '../src/isEmail';

describe('isEmail test', () => {
  it('`kecoyo@163.com`是有效的Email', () => {
    expect(isEmail('kecoyo@163.com')).toBe(true);
  });

  it('`kecoyo@163`不是有效的Email', () => {
    expect(isEmail('kecoyo@163')).toBe(false);
  });
});
