import dotCase from '../src/dotCase';

describe('dotCase test', () => {
  it(`dotCase('--foo-bar--') = 'foo.bar'`, () => {
    expect(dotCase('--foo-bar--')).toBe('foo.bar');
  });
});
