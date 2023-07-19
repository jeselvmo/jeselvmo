import upperFirst from '../src/upperFirst';

describe('upperFirst test', () => {
  it(`upperFirst('FRED') = 'FRED'`, () => {
    expect(upperFirst('FRED')).toBe('FRED');
  });

  it(`upperFirst('fred') = 'Fred'`, () => {
    expect(upperFirst('fred')).toBe('Fred');
  });

  it(`upperFirst('--foo-bar--') = '--foo-bar--'`, () => {
    expect(upperFirst('--foo-bar--')).toBe('--foo-bar--');
  });

  it(`upperFirst('foo-bar') = '--foo-bar--'`, () => {
    expect(upperFirst('foo-bar')).toBe('Foo-bar');
  });
});
