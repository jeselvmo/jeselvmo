import pathCase from '../src/pathCase';

describe('pathCase test', () => {
  it(`pathCase('--foo-bar--') = 'foo/bar'`, () => {
    expect(pathCase('--foo-bar--')).toBe('foo/bar');
  });
});
