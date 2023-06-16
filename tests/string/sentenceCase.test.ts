import sentenceCase from '../src/sentenceCase';

describe('sentenceCase test', () => {
  it(`sentenceCase('--foo-bar--') = 'Foo bar'`, () => {
    expect(sentenceCase('--foo-bar--')).toBe('Foo bar');
  });
});
