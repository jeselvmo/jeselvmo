import snakeCase from '../src/snakeCase';

describe('snakeCase test', () => {
  it(`snakeCase('--foo-bar--') = 'foo_bar'`, () => {
    expect(snakeCase('--foo-bar--')).toBe('foo_bar');
  });
});
