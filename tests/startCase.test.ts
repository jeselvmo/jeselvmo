import startCase from '../src/startCase';

describe('startCase test', () => {
  it(`startCase('--foo-bar--') = 'Foo Bar'`, () => {
    expect(startCase('--foo-bar--')).toBe('Foo Bar');
  });
});
