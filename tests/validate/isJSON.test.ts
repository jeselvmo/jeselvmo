import isJSON from '../../src/isJSON';

describe('isJSON test', () => {
  it('`{}`是一个有效的JSON', () => {
    expect(isJSON('{}')).toBe(true);
  });

  it('`[]`是一个有效的JSON', () => {
    expect(isJSON('[]')).toBe(true);
  });

  it('`{"name": "yangkk"}`是一个有效的JSON', () => {
    expect(isJSON('{"name": "yangkk"}')).toBe(true);
  });

  it('`1`不是一个有效的JSON', () => {
    expect(isJSON('1')).toBe(false);
  });
});
