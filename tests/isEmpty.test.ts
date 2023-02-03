import isEmpty from '../src/isEmpty';

describe('isEmpty test', () => {
  it('`null` is empty', () => {
    expect(isEmpty(null)).toBeTruthy();
  });

  it('`undefined` is empty', () => {
    expect(isEmpty(undefined)).toBeTruthy();
  });

  it('`true` is empty', () => {
    expect(isEmpty(true)).toBeTruthy();
  });

  it('`1` is empty', () => {
    expect(isEmpty(1)).toBeTruthy();
  });

  it('`0` is empty', () => {
    expect(isEmpty(0)).toBeTruthy();
  });

  it('`[]` is empty', () => {
    expect(isEmpty([])).toBeTruthy();
  });

  it('`[1, 2, 3]` is not empty', () => {
    expect(isEmpty([1, 2, 3])).toBeFalsy();
  });

  it("`''` is empty", () => {
    expect(isEmpty('')).toBeTruthy();
  });

  it("`'abc'` is not empty", () => {
    expect(isEmpty('abc')).toBeFalsy();
  });

  it('`{}` is empty', () => {
    expect(isEmpty({})).toBeTruthy();
  });

  it("`{ 'a': 1 }` is not empty", () => {
    expect(isEmpty({ 'a': 1 })).toBeFalsy();
  });
});
