import kebabCase from '../src/kebabCase';

describe('kebabCase test', () => {
  it(`kebabCase('--foo-bar--') = 'foo-bar'`, () => {
    expect(kebabCase('--foo-bar--')).toBe('foo-bar');
  });
});
