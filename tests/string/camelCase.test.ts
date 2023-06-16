import camelCase from '../../src/camelCase';

describe('camelCase test', () => {
  it(`camelCase('--foo-bar--') = 'fooBar'`, () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
  });
});
