import lowerFirst from '../src/lowerFirst';

describe('lowerFirst test', () => {
  it(`lowerFirst('FRED') = 'fRED'`, () => {
    expect(lowerFirst('FRED')).toBe('fRED');
  });

  it(`lowerFirst('Fred') = 'fred'`, () => {
    expect(lowerFirst('Fred')).toBe('fred');
  });

  it(`lowerFirst('--foo-bar--') = '--foo-bar--'`, () => {
    expect(lowerFirst('--foo-bar--')).toBe('--foo-bar--');
  });

  it(`lowerFirst('FOO-BAR') = 'fOO-BAR'`, () => {
    expect(lowerFirst('FOO-BAR')).toBe('fOO-BAR');
  });
});
