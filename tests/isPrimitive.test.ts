import isPrimitive from '../src/isPrimitive';

describe('isPrimitive test', () => {
  it("`''` is a primitive type", () => {
    expect(isPrimitive('')).toBeTruthy();
  });

  it('`1` is a primitive type', () => {
    expect(isPrimitive(1)).toBeTruthy();
  });

  it('`false` is a primitive type', () => {
    expect(isPrimitive(false)).toBeTruthy();
  });

  it('`null` is a primitive type', () => {
    expect(isPrimitive(null)).toBeTruthy();
  });

  it('`undefined` is a primitive type', () => {
    expect(isPrimitive(undefined)).toBeTruthy();
  });

  it('`{}` is not a primitive type', () => {
    expect(isPrimitive({})).toBeFalsy();
  });

  it('`[]` is not a primitive type', () => {
    expect(isPrimitive([])).toBeFalsy();
  });

  it('`function () {}` is not a primitive type', () => {
    expect(isPrimitive(function () {})).toBeFalsy();
  });

  it('`new Error()` is not a primitive type', () => {
    expect(isPrimitive(new Error())).toBeFalsy();
  });
});
