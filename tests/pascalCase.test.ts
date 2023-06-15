import pascalCase from '../src/pascalCase';

describe('pascalCase test', () => {
  it(`pascalCase('--foo-bar--') = 'FooBar'`, () => {
    expect(pascalCase('--foo-bar--')).toBe('FooBar');
  });
});
