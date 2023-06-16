import constantCase from '../src/constantCase';

describe('constantCase test', () => {
  it(`constantCase('--foo-bar--') = 'FOO_BAR'`, () => {
    expect(constantCase('--foo-bar--')).toBe('FOO_BAR');
  });
});
