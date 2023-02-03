import cloneDeep from '../src/cloneDeep';

describe('cloneDeep test', () => {
  it('two objects are not equal', () => {
    const objects = [{ 'a': 1 }, { 'b': 2 }];
    const deep = cloneDeep(objects);
    expect(deep[0] === objects[0]).toBeFalsy();
  });
});
