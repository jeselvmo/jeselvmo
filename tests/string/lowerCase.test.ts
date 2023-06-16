import lowerCase from '../src/lowerCase';

describe('lowerCase test', () => {
  it(`lowerCase('--FOO-BAR--') = 'foo bar'`, () => {
    expect(lowerCase('--FOO-BAR--')).toBe('foo bar');
  });
});
