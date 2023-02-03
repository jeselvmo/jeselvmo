import cloneDeepWith from '../src/cloneDeepWith';

describe('cloneDeepWith test', () => {
  it('two objects are not equal', () => {
    const objects = [{ 'a': 1 }, { 'b': 2 }];
    const deep = cloneDeepWith(objects);
    expect(deep[0] === objects[0]).toBeTruthy();
  });
});
