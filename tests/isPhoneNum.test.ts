import isPhoneNum from '../src/isPhoneNum';

describe('isPhoneNum test', () => {
  it('`15901097100`是一个有效的手机号码', () => {
    expect(isPhoneNum('15901097100')).toBe(true);
  });

  it('`159010971`不是一个有效的手机号码', () => {
    expect(isPhoneNum('159010971')).toBe(false);
  });

  it('`660600606`不是一个有效的手机号码', () => {
    expect(isPhoneNum('660600606')).toBe(false);
  });
});
