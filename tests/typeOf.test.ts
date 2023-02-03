import typeOf from '../src/typeOf';

describe('typeOf test', () => {
  it("the type of `'abc'` is String", () => {
    expect(typeOf('abc')).toBe('String');
  });

  it('the type of `1` is Number', () => {
    expect(typeOf(1)).toBe('Number');
  });

  it('the type of `true` is Boolean', () => {
    expect(typeOf(true)).toBe('Boolean');
  });

  it('the type of `new Date()` is Date', () => {
    expect(typeOf(new Date())).toBe('Date');
  });

  it('the type of `null` is Null', () => {
    expect(typeOf(null)).toBe('Null');
  });

  it('the type of `undefined` is Undefined', () => {
    expect(typeOf(undefined)).toBe('Undefined');
  });

  it('the type of `[]` is Array', () => {
    expect(typeOf([])).toBe('Array');
  });

  it('the type of `function () {}` is Function', () => {
    expect(typeOf(function () {})).toBe('Function');
  });

  it('the type of `new Error()` is Error', () => {
    expect(typeOf(new Error())).toBe('Error');
  });
});
