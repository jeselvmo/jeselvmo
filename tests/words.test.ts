import words from '../src/words';

describe('words test', () => {
  it(`words('fred, barney, & pebbles') = ['fred', 'barney', 'pebbles']`, () => {
    let arr = words('fred, barney, & pebbles');
    expect(JSON.stringify(arr)).toBe(JSON.stringify(['fred', 'barney', 'pebbles']));
  });

  it(`words('fred, barney, & pebbles', /[^, ]+/g) = ['fred', 'barney', '&', 'pebbles']`, () => {
    let arr = words('fred, barney, & pebbles', /[^, ]+/g);
    expect(JSON.stringify(arr)).toBe(JSON.stringify(['fred', 'barney', '&', 'pebbles']));
  });
});
