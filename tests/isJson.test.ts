import isJson from '../src/isJson';

describe('isJson test', () => {
  it('`{}`是一个有效的JSON', () => {
    expect(isJson('{}')).toBe(true);
  });

  it('`[]`是一个有效的JSON', () => {
    expect(isJson('[]')).toBe(true);
  });

  it('`{"name": "yangkk"}`是一个有效的JSON', () => {
    expect(isJson('{"name": "yangkk"}')).toBe(true);
  });

  it('`1`不是一个有效的JSON', () => {
    expect(isJson('1')).toBe(false);
  });
});
