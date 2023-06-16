import upperCase from '../src/upperCase';

describe('upperCase test', () => {
  it(`upperCase('--foo-bar--') = 'FOO BAR'`, () => {
    expect(upperCase('--foo-bar--')).toBe('FOO BAR');
  });
});
