import isPort from '../../src/isPort';

describe('isPort test', () => {
  it('`0`是一个有效的端口号', () => {
    expect(isPort('0')).toBe(false);
  });

  it('`8080`是一个有效的端口号', () => {
    expect(isPort('8080')).toBe(true);
  });

  it('`65535`是一个有效的端口号', () => {
    expect(isPort('65535')).toBe(true);
  });

  it('`65536`不是一个有效的端口号', () => {
    expect(isPort('65536')).toBe(false);
  });

  it('`-65535`不是一个有效的端口号', () => {
    expect(isPort('-65535')).toBe(false);
  });
});
