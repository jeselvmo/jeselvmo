import titleCase from '../src/titleCase';

describe('titleCase test', () => {
  it(`titleCase('--foo-bar--') = 'Foo Bar'`, () => {
    expect(titleCase('--foo-bar--')).toBe('Foo Bar');
  });
});
