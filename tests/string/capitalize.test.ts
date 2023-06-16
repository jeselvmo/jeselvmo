import capitalize from '../src/capitalize';

describe('capitalize test', () => {
  it(`capitalize('FRED') = 'Fred'`, () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  it(`capitalize('fred') = 'Fred'`, () => {
    expect(capitalize('fred')).toBe('Fred');
  });

  it(`capitalize('--foo-bar--') = '--foo-bar--'`, () => {
    expect(capitalize('--foo-bar--')).toBe('--foo-bar--');
  });

  it(`capitalize('foo-bar') = '--foo-bar--'`, () => {
    expect(capitalize('foo-bar')).toBe('Foo-bar');
  });
});
